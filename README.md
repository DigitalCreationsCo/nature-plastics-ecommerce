# Your Next Store

<div align="center">
<table>
<tr>
<td>
	<a href="https://yournextstore.com/discord"><img src="https://img.shields.io/discord/1206629600483082341?style=for-the-badge&logo=discord&logoColor=white&labelColor=%235865F2&color=%23555" alt="Join Discord" /></a>
</td>
<td>
	<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyournextstore%2Fyournextstore&env=ENABLE_EXPERIMENTAL_COREPACK,NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY,STRIPE_CURRENCY&envDescription=Read%20more%20about%20required%20env%20variables%20in%20YNS&envLink=https%3A%2F%2Fgithub.com%2Fyournextstore%2Fyournextstore%2Ftree%2Fupcoming%3Ftab%3Dreadme-ov-file%23add-environmental-variables&project-name=yournextstore&repository-name=yournextstore&demo-title=Your%20Next%20Store&demo-description=A%20Next.js%20boilerplate%20for%20building%20your%20online%20store%20instantly%3A%20simple%2C%20quick%2C%20powerful.&demo-url=https%3A%2F%2Fdemo.yournextstore.com%2F&demo-image=https%3A%2F%2Fyournextstore.com%2Fdemo.png"><img src="https://vercel.com/button" alt="Deploy with Vercel" /></a>
</td>
<td>
<a href="https://www.producthunt.com/posts/your-next-store?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-your&#0045;next&#0045;store">
	<picture>
		<source
			media="(prefers-color-scheme: dark)"
			srcSet="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=459751&theme=dark"
		/>
		<img
			src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=459751&theme=light"
			height="36"
			alt="Your&#0032;Next&#0032;Store - E&#0045;Commerce&#0032;with&#0032;Stripe&#0032;as&#0032;the&#0032;backend | Product Hunt"
		/>
	</picture>
</a>
</td>
</tr>
</table>

👉 [demo.yournextstore.com](https://demo.yournextstore.com/) 👈

</div>

## Demo

https://github.com/user-attachments/assets/64197310-29bd-4dd3-a736-1494340e20e8

## Prerequisites

### Node.js 20+

We officially support the current LTS version – 20 at the time of writing. YNS should work on versions 18, 20, and 22. If you're using one of those versions and encounter a problem, please report it!

#### Installing Node.js

Follow the instructions for your operating system found here: [nodejs.org/en/download](https://nodejs.org/en/download)

### pnpm 9+

We officially support pnpm version 9, but we will do our best to keep it compatible with npm and yarn.

#### Installing pnpm

The easiest way to install pnpm is via Node.js Corepack. Inside the folder with YNS, run these commands:

```bash
corepack enable
corepack install
```

Alternatively, follow the instructions for your operating system found here: [pnpm.io/installation](https://pnpm.io/installation)

## Create Stripe account

YNS is tightly integrated with [Stripe](https://stripe.com), so you need a Stripe account to use Your Next Store. Follow the instructions from Stripe to [create an account](https://dashboard.stripe.com/register).

It's important to remember that Stripe works in two different modes: **Test Mode** and **Production Mode**. For local development and testing purposes, you should use the **Test Mode**. This way, Stripe will never charge real money, and you can use special test credentials such as credit card numbers and BLIK numbers to complete payments. For more detailed information, please refer to the Stripe documentation at [docs.stripe.com/testing](https://docs.stripe.com/testing).

Once you're ready to sell your products to real customers, you must switch **Test Mode** to **Production Mode** in Stripe and generate new credentials.

> [!TIP]
> This step will require additional verification from Stripe, so we suggest you start the process immediately.

## Add Environment Variables

For YNS to work, you'll need to define a few environmental variables. For local development and testing, you may create an empty `.env` file and copy the contents of `.env.example` into it.

To set env variables in production, you'll need to consult the documentation of your chosen hosting provider.

### Required Environment Variables

- `ENABLE_EXPERIMENTAL_COREPACK` – Vercel only: Set to `1` to enable Corepack
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` – Publishable key from Stripe.
- `STRIPE_SECRET_KEY` – Secret key from Stripe.
- `STRIPE_CURRENCY` – This is used to determine your store's currency. Currently, only a single currency is allowed, and it should be a three-letter ISO code (e.g., `usd`).
- `NEXT_PUBLIC_URL` – **Optional on Vercel** The address of your store without the trailing slash, i.e., `https://demo.yournextstore.com`. When building for the first time, you should set it to any valid URL, i.e. `http://localhost:3000`.

https://github.com/yournextstore/.github/assets/200613/01d27f69-00dc-446e-bc81-5dea2587f346

### Optional Environment Variables

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` – Umami website ID for analytics
- `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` – **Preview**: The endpoint for the newsletter form in the future. It should accept POST requests with a JSON `{ email: string }` and return JSON `{ status: number }`.
- `STRIPE_WEBHOOK_SECRET` – **Preview**: Stripe Webhook secret for handling events from Stripe. Read more below.
- `ENABLE_STRIPE_TAX` – **Preview**: Set to any value (i.e., `1`) to enable Stripe Tax in YNS. Read more below.
- `NEXT_PUBLIC_LANGUAGE` - The locale of the store (i.e., `en-US`)

## Run the store

After following the above steps, run `pnpm install` to install the required dependencies, and then run `pnpm dev` to start the development server on your machine. Your Next Store will be available at [localhost:3000](http://localhost:3000)

## Add products

Your Next Store gets all the products, prices, descriptions, and categories from Stripe. So, if you know Stripe already, you'll feel right at home!

You need to add products to the Stripe Dashboard to show in YNS. After logging in, click **More** in the left sidebar and select **Product catalogue**. You may also use the direct link:

- In **Test Mode**: [dashboard.stripe.com/test/products](https://dashboard.stripe.com/test/products)
- In **Production Mode**: [dashboard.stripe.com/products](https://dashboard.stripe.com/products)

Then, click on **Add product** and fill in all the required information:

- name,
- description,
- price – currently, only _One-off_ payments are supported,
- a product image.

### Metadata

Additionally, Your Next Store uses product metadata to provide more context information about the products. You can specify the following metadata fields:

| Field      | Required | Description                                                                     |
| ---------- | :------: | ------------------------------------------------------------------------------- |
| `slug`     |   Yes    | The product slug is used for URLs. Needs to be unique except for variants.      |
| `category` |    No    | The product category used for grouping products.                                |
| `order`    |    No    | The product order used for sorting products. Lower numbers are displayed first. |
| `variant`  |    No    | The product variant slug. Read below for details.                               |

Now you should see all added products in Your Next Store.

## Variants

Your Next Store supports simple product variants. To create a product with variants, you must add multiple products to Stripe with the same `slug` metadata field. YNS uses the `variant` metadata field to distinguish between different variants of the same product. For example, if you have a T-shirt in multiple sizes, you can create three products with the `slug` of `t-shirt` and `variant` values of `small`, `medium`, and `large`.

Variants are displayed on the product page. Variants can have different prices, descriptions, and images. It's important to note that the `category` should be the same for all variants of the same product for the best browsing experience.

> [!NOTE]
> In the future, we plan to add the possibility of editing products and variants inside a built-in admin dashboard. If you have any ideas or suggestions, please let us know!

## Stripe Webhooks

Your Next Store uses Stripe Webhooks to handle events from Stripe. Currently, the endpoint is used to automatically revalidate cart page and to create tax transaction (if enabled). To set up Webhooks, follow the Stripe docs. The exact steps depend on whether you've activated Stripe Workbench in your Stripe account: [docs.stripe.com/webhooks#add-a-webhook-endpoint](https://docs.stripe.com/webhooks#add-a-webhook-endpoint).

The endpoint for the webhook is `https://{YOUR_DOMAIN}/api/stripe-webhook`. The only required event is `payment_intent.succeeded`. When the webhook is configured in Stripe, set the `STRIPE_WEBHOOK_SECRET` environment variable to the secret key created by Stripe.

> [!NOTE]
> In the future, we plan to add more events to the webhook to improve the user experience.

## Stripe Tax

Your Next Store comes with a preview of Stripe Tax support. To enable it, set the `ENABLE_STRIPE_TAX` environment variable to any value (i.e., `1`).

For this feature to work, you must set your Tax settings in Stripe Dashboard: [dashboard.stripe.com/register/tax](https://dashboard.stripe.com/register/tax). When enabled and configured, taxes will be automatically calculated and added to the total price of the product based on:

- product pricing - tax can be inclusive or exclusive
- product tax code
- customer's address
- customer's tax ID

> [!WARNING]
> This feature is still in the early stage, and there could be edge cases that are not supported. We're actively working on it, so if you encounter any problems or have any suggestions, please let us know!

## Production Deployment

### Vercel

To deploy on Vercel, click the following button, set up your GitHub repository and environment variables, and click **Deploy**. Make sure to set the `ENABLE_EXPERIMENTAL_COREPACK` variable to `1`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyournextstore%2Fyournextstore&env=ENABLE_EXPERIMENTAL_COREPACK,NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY,STRIPE_CURRENCY&envDescription=Read%20more%20about%20required%20env%20variables%20in%20YNS&envLink=https%3A%2F%2Fgithub.com%2Fyournextstore%2Fyournextstore%2Ftree%2Fupcoming%3Ftab%3Dreadme-ov-file%23add-environmental-variables&project-name=yournextstore&repository-name=yournextstore&demo-title=Your%20Next%20Store&demo-description=A%20Next.js%20boilerplate%20for%20building%20your%20online%20store%20instantly%3A%20simple%2C%20quick%2C%20powerful.&demo-url=https%3A%2F%2Fdemo.yournextstore.com%2F&demo-image=https%3A%2F%2Fyournextstore.com%2Fdemo.png)

### Your Own VPS

Description coming soon.

### Docker

To deploy on Docker, follow these steps:

1. Clone this repository into an empty folder and create the .env file in the repository as described [here](#add-environment-variables).
2. Set the variable DOCKER=1 in .env
3. Execute `pnpm run docker:build`.
4. After that, you can start the container with `pnpm run docker:run`.

## That's all

YNS evolves each day, and we actively seek feedback on what to improve. If you have any questions or problems, don't hesitate to get in touch with us on our Discord Server.

## FAQ

### Sometimes, you use `structuredClone` to pass data from server to client components. Why?

Only certain types of data can be passed from the server to the client directly. Data from Stripe SDK often contains class instances. To work around this, we use `structuredClone` to eliminate them and pass just plain old objects to the client.



======


# Stablo Blog Template - Next.js & Sanity CMS

Stablo is a JAMStack Blog template built with Next.js, Tailwind CSS & Sanity CMS by [Web3Templates](https://web3templates.com/). It comes with free & pro version.

## [Installation ↓](#installation)

## Live Demo

**[Free Version Demo →](https://stablo.web3templates.com/)**

**[Pro Version Demo →](https://stablo-pro.web3templates.com/)**

## Features

<!-- prettier-ignore -->
| Feature | Free Version | Pro Version |
| --- | ------ | --- |
| Next.js v13 | ✅  | ✅ |
| /app Directory | ✅  | ✅ |
| Tailwind CSS   | ✅  | ✅ |
| Sanity CMS (v3) | ✅  | ✅ |
| On-demand Revalidation  | ❌  | ✅ |
| Auto-Update New Posts | Time-Based | ✅ |
| Mobile Responsive | ✅  | ✅ |
| Dark & Light Mode | ✅  | ✅ |
| Working Contact Page | ✅  | ✅ |
| Archive (Pagination) | ✅  | ✅ |
| Category Pages  | ❌  | ✅ |
| Author Pages    | ❌  | ✅ |
| Search Page     | ❌  | ✅ |
| Homepage - Default | ✅  | ✅ |
| Homepage - Alternate       | ❌  | ✅ |
| Homepage - Minimal | ❌  | ✅ |
| Homepage - Lifestlye       | ❌  | ✅ |
| Homepage - Two Column      | ❌  | ✅ |
| Blog Post - Default        | ✅  | ✅ |
| Blog Post - Minimal        | ❌  | ✅ |
| Blog Post - Lifestlye      | ❌  | ✅ |
| Blog Post - with Sidebar   | ❌  | ✅ |
| 6 Months Support| ❌  | ✅  |
| Free Updates    | ✅  | ✅  |
| License         | GPL-2.0 | Commercial |
| &nbsp; | &nbsp;| &nbsp;|
| Pricing| Free|**$49**|
| &nbsp; | [Deploy for free](https://vercel.com/new/web3templates/clone?demo-title=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&demo-description=A%20minimal%20blog%20website%20template%20built%20with%20Next.js%2C%20TailwindCSS%20%26%20Sanity%20CMS%0A&demo-url=https%3A%2F%2Fstablo-template.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F6p72KDrdJ8SjyvOBrgRbnr%2F0760db43f2cb08504a2f67601e74d986%2FCleanShot_2022-07-15_at_16.54.17.png&project-name=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&repository-name=stablo-blog&repository-url=https%3A%2F%2Fgithub.com%2Fweb3templates%2Fstablo&from=templates&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx) | [Purchase Pro](https://web3templates.com/templates/stablo-minimal-blog-website-template) |

<a href="https://web3templates.com/templates/stablo-minimal-blog-website-template">
<img width="160" alt="Upgrade to Pro" src="https://user-images.githubusercontent.com/1884712/199181300-37c2128e-d033-4145-a906-16fa5263a53b.png">
</a>

###### Click the above button for one-click clone & deploy for this template. Read [quick start](#quick-start) guide below.

#### Template Preview

[![Next.js Front-end Preview](https://user-images.githubusercontent.com/1884712/169838344-e32b7426-621a-45a4-aba8-afedf3377e1f.jpeg)](https://web3templates.com/preview/stablo)

#### Sanity CMS Preview

![Backend Sanity CMS Preview](https://user-images.githubusercontent.com/1884712/170030678-c6e32d47-0b92-42b7-ac2d-f3cf800c0969.png)

# Installation

## Step 1: Deploy to Vercel

Use the Deploy Button below. It will let you deploy the starter using Vercel as well as connect it to your Sanity Studio using the Sanity Vercel Integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/web3templates/clone?demo-title=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&demo-description=A%20minimal%20blog%20website%20template%20built%20with%20Next.js%2C%20TailwindCSS%20%26%20Sanity%20CMS%0A&demo-url=https%3A%2F%2Fstablo-template.vercel.app%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F6p72KDrdJ8SjyvOBrgRbnr%2F0760db43f2cb08504a2f67601e74d986%2FCleanShot_2022-07-15_at_16.54.17.png&project-name=Stablo%20%E2%80%93%20Minimal%20Blog%20Template&repository-name=stablo-blog&repository-url=https%3A%2F%2Fgithub.com%2Fweb3templates%2Fstablo&from=templates&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

**The above deploy will automatically configure the following:**

- Create new Repository in Github
- Create a Sanity Project
- Install Sanity Integration in Vercel
- Add required CORS & API settings in the project
- Deploy Frontend to Vercel

Alternatively, you can deploy to other services such as Netlify or Cloudflare Pages or AWS Amplify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/web3templates/stablo/)


## Step 2: Set up the project locally.

Once you have deployed the website, it will look like empty or not configured properly. This is expected. We need to do few more steps to make it as seen on the demo.

First, clone the github repository vercel created into your local machine. Use the following command structure. Make sure the terminal is on the right folder before executing this command.

```bash
git clone https://github.com/<usename>/<repo>.git your-project-name
```

Once cloned, run the following command from the project's root directory. This will link your vercel project.

```bash
npx vercel link
```

Now, run the following command to pull the `.env` variables to your local system.

```bash
npx vercel env pull
```

Now you can see that a new `.env.local` file has been created. If this doesn't work, you can also rename the `.env.local.example` to `.env.local` and add the Sanity Project ID manually.

Now, you can open your code editor (if not already) we prefer VSCode. The run the command in the integrated terminal inside the code editor.

```bash
npm install
# or
yarn install
# or
pnpm install
```

We prefer `pnpm` to save your disk space.

## Step 3: Import Demo Data (Optional)

To look like what you have seen in the demo, with all the content and images, follow the below steps:

1. if you have not installed `@sanity/cli` install it globally first.

```bash
npm install -g @sanity/cli
# or
pnpm install -g @sanity/cli
```

Then login to sanity using `sanity login` command

```
sanity login
```

Now, you will be able to import demo content by running the `sanity-import` command. The files are located at `/lib/sanity/data/production.tar.gz` and will load automatically by running the below command.

```bash
npm run sanity-import
# or
pnpm sanity-import
```

## Step 4: Finish it up!

Now, run your project using the below command.

```bash
npm run dev
# or
pnpm dev
```

Now your project should be up and the Next.js frontend will be running on http://localhost:3000.

Sanity Studio can be accessed using http://localhost:3000/studio or you can run it on a separate https://localhost:3333 server using the following command.

```bash
npm run sanity
# or
pnpm sanity
```

## Step 5. Redploy

Once all of the above changes is made, make sure to redeploy to vercel once again to see all of your changes in production.

You can `git push` the changes and it should automatically trigger a new deployment. If not, you can also deploy to vercel using the following command.

```
npx vercel --prod
```

# Manual Installation

We recommend you to use the one-click deploy option above. For some reason, if you cannot, use the following steps to install it manually.

## Step 1. Clone the Repo

Clone the github repo or use the downloaded files in your local machine.

## Step 2. Setup `.env` Variables.

Open the project folder and rename `.env.local.example` placed in the root folder into `.env.local` and add your sanity project ID. You can create a new project by visiting this link: https://www.sanity.io/get-started/create-project

If you already have a project, copy the project ID from https://sanity.io/manage

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxyyzz
```

## Step 3. Allow CORS Origins

To make the studio work properly, you must add CORS origin in Sanity. This is usually setup automatically if you are using the Vercel Deploy. Visit `https://www.sanity.io/manage/personal/project/<project-id>/api` in your browser to add CORS origin.

Click `Add CORS origin` button and enter the URL as `http://localhost:3000` and check the Allow credentials checkbox.

## Step 4 Continue from above steps

Now, you will be able continue from the above instructions to import the demo data and running the project locally.

## Help and Support

Something's not working as expected? Raise a github issue. If you need personalized support or help, please consider purchasing the Pro version and we will assist you over email.

## Sponsor

<a href="https://vercel.com/?utm_source=web3templates&amp;utm_campaign=oss" rel="nofollow"><img src="https://camo.githubusercontent.com/37b009b52b3a9af7886f52e75cd76d1b32fef331ab1dc2108089c0ced0b7635f/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f33313034392f313631383938333239372d706f77657265642d62792d76657263656c2e737667" alt="image" style="max-width: 70%;"></a>
