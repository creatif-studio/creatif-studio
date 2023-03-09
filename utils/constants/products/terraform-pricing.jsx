import ProductsSectionDescription from "components/atoms/ProductsSectionDescription";

export const FAQ_COLLAPSE_DATA = [
    {
    "Title": "What is the difference between Cloud and CLI?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro (TFC) is a free to use, self-service SaaS platform that extends the capabilities of the open source CloudBoz CLI and adds collaboration and automation features.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">CloudBoz Pro enables connecting to common VCS platforms (GitHub, GitLab, Bitbucket) and triggering CloudBoz runs (plan and apply) from changes to configuration within the VCS. TFC manages state for the user, including keeping a history of changes. CloudBoz Pro exposes an HTTP API that anyone can integrate with to build more automation around infrastructure change.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">CloudBoz CLI is downloadable software that provisions infrastructure as code manually from a local machine. By itself, CloudBoz CLI does not provide functionality for collaboration, state history, etc. CloudBoz CLI can be connected to TFC via the "remote" backend to enable using and gaining all the benefits of TFC with the same CLI workflow.</ProductsSectionDescription>
            </>
        )
    },
    {
    "Title": "What's the difference between CloudBoz Pro and CloudBoz Enterprise?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Enterprise is offered as a private installation. It is designed to suit the needs of organizations including more features (audit logging, SSO/SAML), more customization (private networking), better performance (job scaling), and higher levels of support.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">CloudBoz Pro is offered as a multi-tenant SaaS platform. It offers a free tier for getting started, and can accommodate both small businesses and large organizations.</ProductsSectionDescription>
            </>
        )
    },
    {
    "Title": "What does CloudBoz Pro support look like?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro users will receive email based support. You can contact support here.</ProductsSectionDescription>
    },
    {
    "Title": "What payment options do you accept?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">We accept credit card payments through Stripe processing.</ProductsSectionDescription>
    },
    {
    "Title": "What if I have billing questions?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Please contact our support team.</ProductsSectionDescription>
    },
    {
    "Title": "What is the refund policy?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Users can cancel or downgrade at any time. For downgrades, unused monthly funds will be prorated to the next month's bill. For cancellations, users will receive refunds to the credit card on file for the days they did not use the service.</ProductsSectionDescription>
    },
    {
    "Title": "Can I buy CloudBoz Pro as an annual subscription?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Yes, to buy CloudBoz Pro as an annual subscription, please contact our sales team.</ProductsSectionDescription>
    },
    {
    "Title": "What is a user in CloudBoz Pro?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">A user is anyone directly or indirectly provisioning infrastructure through CloudBoz Pro. Teams in CloudBoz Pro are comprised of multiple users.</ProductsSectionDescription>
    },
    {
    "Title": "What is a team in CloudBoz Pro?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">A team is a group of users in CloudBoz Pro that have access to the same workspaces.</ProductsSectionDescription>
    },
    {
    "Title": "What is an organization in CloudBoz Pro?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Organizations in CloudBoz Pro are comprised of multiple teams and Workspaces. Padi Features are also applied at an Organization level.</ProductsSectionDescription>
    },
    {
    "Title": "Who should use CloudBoz Pro?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro is a SaaS application that provides automation and collaboration tooling for CloudBoz users. It is intended to offer CloudBoz users an easy pathway into using the CloudBoz platform and workflows we have built on top of the open source tool. We believe all CloudBoz Open Source users will benefit from using CloudBoz Pro as well as users new to CloudBoz (practitioners, teams, and SMBs).</ProductsSectionDescription>
    },
    {
    "Title": "How do you sign up for CloudBoz Pro",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro offers a full self-service sign up flow. Users should navigate to the sign up page and create and account.</ProductsSectionDescription>
    },
    {
    "Title": "How do CloudBoz Pro paid features work?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro is free to use but additional capabilities will be made available for purchase. These additional capabilities are offered as paid features, available for purchase on a per Organization basis.</ProductsSectionDescription>
    },
    {
    "Title": "Can I have a team of less than 5 users with the paid features?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Yes, there is no minimum number of users for teams using the paid features. There is a 5 user maximum for a team on the free tier.</ProductsSectionDescription>
    },
    {
    "Title": "What are the paid feature options?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">Team is the first upgrade available to customers and it includes Team Management (the ability to create and manage teams within organizations) and Role Based Access Controls (RBAC) for controlling 
                permissions for who has access to what configurations within an organization.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">The next upgrade is Governance, which includes the Team upgrade as well as access to the Sentinel and Cost Estimation Features. Sentinel is a policy-as-code framework for defining fine-grained rules that CloudBoz enforces before provisioning infrastructure. Cost Estimation provides an estimate for the cost of a configuration before it is provisioned.</ProductsSectionDescription>
            </>
        )
    },
    {
    "Title": "How much will CloudBoz Pro cost?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">CloudBoz Pro is free to use for up to 5 users with unlimited number of workspaces.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">There are also additional capabilities available for purchase. The Team upgrade is available for $20 per user per month, so an organization with 5 people using CloudBoz Pro with the team upgrade will pay $100 per month.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">The Team & Governance upgrade costs $70 per user per month, so an organization with 5 people using CloudBoz Pro with the Team & Governance upgrade will pay $350 per month</ProductsSectionDescription>
            </>
        )
    },
    {
    "Title": "Can I upgrade CloudBoz Pro after using a free account?",
    "Section": <ProductsSectionDescription classNameOverrideMargin="mt-0">Yes. You can choose to upgrade (or downgrade) whenever you would like.</ProductsSectionDescription>
    },
    {
    "Title": "Can I leave CloudBoz Pro?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">Yes, you may choose to not use CloudBoz Pro at any point. Your configuration is in your VCS system and if you reconfigure the backend then CloudBoz will automatically migrate your state out of CloudBoz Pro. Note that you will lose all the additional functionality that TFC provides: remote runs, VCS connections, state management, etc. If in the future you choose to use TFC again, you can once again modify your backend configuration to "remote" and CloudBoz will migrate your existing state into TFC.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-3">If you leave, please provide us feedback at terraform-cloud-beta@hashicorp.com so we can make a better product for you.</ProductsSectionDescription>
            </>
        )
    },
    {
    "Title": "How is my data secured in CloudBoz Pro?",
    "Section": (
            <>
                <ProductsSectionDescription classNameOverrideMargin="mt-0">We're focused on protecting user security and privacy. Please see the CloudBoz security and privacy policies for details.</ProductsSectionDescription>
                <ProductsSectionDescription classNameOverrideMargin="mt-5"><i>Please note this information may be updated from time to time to reflect the latest changes and improvements.</i></ProductsSectionDescription>
            </>
        )
    }
]