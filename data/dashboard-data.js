/**
 * Dashboard component data
 */

const dashboardComponents = [
    {
        id: "energy-heatmap",
        title: "Team Energy Heatmap",
        description: "AI-powered analysis of optimal meeting times across time zones.",
        metricValue: "32%",
        metricLabel: "productivity increase with optimized scheduling",
        colorClass: "color-blue",
        details: {
            overview: "The Team Energy Heatmap is an AI-powered visualization tool that analyzes and displays the optimal meeting times for global teams across multiple time zones.",
            metrics: [
                { value: "32%", title: "Productivity Increase", colorClass: "color-blue" },
                { value: "28%", title: "Meeting Satisfaction", colorClass: "color-green" },
                { value: "45%", title: "Reduced Meeting Fatigue", colorClass: "color-purple" },
                { value: "3.2h", title: "Weekly Time Saved", colorClass: "color-orange" }
            ],
            keyPoints: [
                "Calendar activity patterns",
                "Email and Teams message time distributions",
                "Document editing peak times",
                "Self-reported productivity data",
                "Meeting participation metrics"
            ]
        }
    },
    {
        id: "burnout-shield",
        title: "Burnout Prevention Shield",
        description: "Early detection system for work-life imbalance with personalized recommendations.",
        metricValue: "94%",
        metricLabel: "accuracy in burnout risk detection",
        colorClass: "color-green",
        details: {
            overview: "The Burnout Prevention Shield is our AI-powered early warning system that helps identify and prevent employee burnout before it happens.",
            metrics: [
                { value: "94%", title: "Detection Accuracy", colorClass: "color-green" },
                { value: "22%", title: "Decreased Sick Leave", colorClass: "color-blue" },
                { value: "38%", title: "Improved Work-Life Balance", colorClass: "color-purple" },
                { value: "85%", title: "Manager Engagement", colorClass: "color-orange" }
            ],
            keyPoints: [
                "After-hours work frequency and duration",
                "Meeting overload patterns",
                "Email response time changes",
                "Collaboration pattern disruptions",
                "Communication sentiment analysis",
                "Calendar fragmentation"
            ],
            recommendations: [
                {
                    title: "Meeting Overload Alert",
                    text: "You've had 28% more meetings this month compared to your optimal baseline. Consider blocking focus time on Tuesdays and Thursdays, which historically have been your most productive days."
                },
                {
                    title: "After-Hours Work Pattern",
                    text: "Your team has been consistently working after 7pm for the past two weeks. Consider rescheduling morning meetings to allow for later start times."
                }
            ]
        }
    },
    {
        id: "collaboration-beautifier",
        title: "Collaboration Beautifier",
        description: "Identifies communication patterns and suggests optimal team synergies.",
        metricValue: "73%",
        metricLabel: "improvement in cross-team collaboration",
        colorClass: "color-purple",
        details: {
            overview: "The Collaboration Beautifier identifies communication patterns across teams and suggests optimal collaboration strategies.",
            metrics: [
                { value: "73%", title: "Improved Cross-Team Collaboration", colorClass: "color-purple" },
                { value: "42%", title: "Reduced Information Silos", colorClass: "color-blue" },
                { value: "35%", title: "Faster Project Completion", colorClass: "color-green" },
                { value: "68%", title: "Knowledge Sharing Increase", colorClass: "color-orange" }
            ],
            keyPoints: [
                "Teams channel communications",
                "Document co-authoring relationships",
                "Meeting participation networks",
                "Knowledge sharing flows",
                "Project tool interactions"
            ]
        }
    },
    {
        id: "meeting-effectiveness",
        title: "Meeting Effectiveness",
        description: "AI analysis of meeting time utilization with actionable improvement suggestions.",
        metricValue: "37%",
        metricLabel: "increase in meeting efficiency",
        colorClass: "color-orange",
        details: {
            overview: "Our Meeting Effectiveness tool uses AI to analyze meeting patterns, participation, and outcomes to provide actionable insights for optimization."
        }
    },
    {
        id: "global-harmonizer",
        title: "Global Team Harmonizer",
        description: "Smart scheduling across time zones for maximum team energy and productivity.",
        metricValue: "16%",
        metricLabel: "reduction in off-hours work",
        colorClass: "color-blue",
        details: {
            overview: "The Global Team Harmonizer optimizes collaboration across international teams by finding ideal meeting times, managing cultural differences, and ensuring equitable work distribution across time zones."
        }
    },
    {
        id: "copilot-integration",
        title: "Microsoft Copilot Integration",
        description: "Seamless AI assistance within Microsoft 365 for enhanced decision making.",
        metricValue: "28%",
        metricLabel: "time saved on administrative tasks",
        colorClass: "color-red",
        details: {
            overview: "Our Microsoft Copilot Integration enhances workplace productivity by bringing AI assistance directly into Microsoft 365 applications.",
            metrics: [
                { value: "28%", title: "Time Saved on Admin Tasks", colorClass: "color-red" },
                { value: "42%", title: "Faster Document Creation", colorClass: "color-blue" },
                { value: "36%", title: "Improved Data Analysis", colorClass: "color-green" },
                { value: "72%", title: "User Adoption Rate", colorClass: "color-purple" }
            ]
        }
    }
];