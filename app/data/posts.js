export const posts = [
  {
    slug: "data-supply-chain-trust-agent-governance",
    title: "What Microsoft's Agent Governance Toolkit doesn't cover: data supply chain trust",
    date: "2026-06-25",
    readingTime: "6 min read",
    description:
      "AGT answers whether an agent is authorized to call a tool. There is a second question it does not answer: whether the agent should act given the current state of the data behind the decision.",
    content: [
      {
        type: "paragraph",
        text: "Microsoft released the Agent Governance Toolkit (AGT) in April 2026. It is well-designed. It handles identity, tool-level authorization, and policy-as-code through a govern() wrapper. If you build with Azure AI Foundry, it is the right starting point.",
      },
      {
        type: "paragraph",
        text: "But after reading the full repository, including all eight packages and every policy example, I noticed something it does not answer.",
      },
      {
        type: "heading",
        text: "The question AGT answers",
      },
      {
        type: "paragraph",
        text: "AGT answers: is this agent allowed to call this tool? It checks agent identity, matches it against a policy, and decides whether the action is permitted. The policy conditions look at action.type and tool_name.",
      },
      {
        type: "paragraph",
        text: "That is a necessary control. It is not sufficient on its own.",
      },
      {
        type: "heading",
        text: "The question AGT does not answer",
      },
      {
        type: "paragraph",
        text: "Here is the second question: should this agent act, given the current state of the data behind the decision?",
      },
      {
        type: "paragraph",
        text: "These are not the same question. An agent can be fully authorized to call approve_refund — right identity, right policy — and still cause damage. Not because the policy is wrong, but because the data behind the decision is stale, the customer tier that arrived in this morning's Fivetran sync contains an enum value the input contract never authorized, or the BigQuery row the agent is reading is 42 minutes old when the SLA requires freshness within 15.",
      },
      {
        type: "paragraph",
        text: "In each of these cases, the authorization check passes. The damage still happens.",
      },
      {
        type: "heading",
        text: "A concrete example",
      },
      {
        type: "paragraph",
        text: "A customer service agent is authorized to approve refunds. A refund request comes in for customer C-1042. The agent calls approve_refund with a $75 amount. AGT checks: is this agent allowed to call this tool? Yes. Action permitted.",
      },
      {
        type: "paragraph",
        text: "What AGT does not check: the Fivetran sync that populated the customer record ran 42 minutes ago. The SLA for this decision is 15 minutes. The customer's tier in the synced table is retention_experiment — a value that appeared this morning and was never part of the input contract used to define the refund policy. Contract v1 authorizes automatic refund decisions for standard, premium, and enterprise. Not for retention_experiment.",
      },
      {
        type: "paragraph",
        text: "The agent is authorized. The data is not trusted. The refund should not be automatic.",
      },
      {
        type: "heading",
        text: "What data supply chain trust means in practice",
      },
      {
        type: "paragraph",
        text: "Data supply chain trust is not a vague concept. It is three concrete checks that can be run before a high-impact action executes:",
      },
      {
        type: "list",
        items: [
          "Freshness: is the data behind this decision newer than the SLA requires? If a Fivetran sync ran 42 minutes ago and the contract requires 15-minute freshness, that is a risk signal.",
          "Schema compliance: does the data match the shape the policy was written against? A new enum value in customer_tier that contract v1 never authorized means the policy was not written for this case.",
          "Connection validity: is the data source currently reachable and reporting a successful sync? A schema failure or a dropped connection should block the action, not let it pass silently.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these checks are probabilistic. They are deterministic. The policy engine either sees fresh, compliant, connected data or it does not.",
      },
      {
        type: "heading",
        text: "TrustGate: what I built to explore this",
      },
      {
        type: "paragraph",
        text: "During a hackathon I built TrustGate: a runtime authorization gate that sits between an AI agent and a risky action. Before approve_refund executes, TrustGate checks live Fivetran evidence, a BigQuery row from the synced table, and a versioned input contract. The policy engine returns ALLOW, APPROVAL_REQUIRED, or BLOCK with a full evidence receipt.",
      },
      {
        type: "paragraph",
        text: "The Gemini agent built in Google Cloud Agent Builder does not decide the refund. It calls the proposeTrustGateAction MCP tool, TrustGate evaluates the policy against live evidence, and Gemini explains the returned receipt. The model proposes. The policy engine decides.",
      },
      {
        type: "paragraph",
        text: "When the customer tier is retention_experiment and contract v1 does not authorize that tier for automatic decisions, the result is APPROVAL_REQUIRED. When a conditional approval under $50 has been granted, the next call with amount 40 returns ALLOW with the approval receipt attached. When there is a schema or connection failure, the result is BLOCK.",
      },
      {
        type: "heading",
        text: "Where this fits relative to AGT",
      },
      {
        type: "paragraph",
        text: "I posted a Discussion on the microsoft/agent-governance-toolkit repository asking exactly this question. AGT has a govern() wrapper that accepts a policy. Data supply chain trust could plug in as a custom policy provider: a safe_tool that, before evaluating identity and action type, checks the live state of the data behind the decision.",
      },
      {
        type: "paragraph",
        text: "Or it belongs outside AGT entirely, as a layer that feeds a trusted-data signal into whatever policy engine you are already running.",
      },
      {
        type: "paragraph",
        text: "The boundary question is genuinely open. What is clear is that neither AGT, Amazon Bedrock AgentCore Policy, nor the current MCP specification addresses it. They all check what the agent is allowed to do. None of them check whether the data behind the action can be trusted right now.",
      },
      {
        type: "heading",
        text: "Why this matters for production AI agents",
      },
      {
        type: "paragraph",
        text: "AI agents are being deployed into production systems where the data they act on is not static. It comes from syncs, from pipelines, from APIs. It has freshness windows. It has schemas that evolve. A governance layer that only checks agent identity and tool permission is built for a world where the data is always correct, always fresh, and always matches the contract the policy was written against.",
      },
      {
        type: "paragraph",
        text: "That world does not exist in production.",
      },
      {
        type: "paragraph",
        text: "The runtime authorization gate for AI agents needs a second dimension: not just who is calling what, but whether the data behind the call can be trusted today.",
      },
      {
        type: "heading",
        text: "Links",
      },
      {
        type: "list",
        items: [
          "TrustGate on GitHub: https://github.com/MoAz06/trustgate-ai-agents",
          "Microsoft Agent Governance Toolkit: https://github.com/microsoft/agent-governance-toolkit",
          "GitHub Discussion on AGT: https://github.com/microsoft/agent-governance-toolkit/discussions",
        ],
      },
    ],
  },
];
