# cloudfare_rewriteUrl
Cloudflare Worker to re-write URL's

To install and deploy the worker in Cloudflare, follow these steps:

1. **Log in to Cloudflare:**  
   Sign in to your Cloudflare dashboard at [dash.cloudflare.com](https://dash.cloudflare.com).

2. **Create a New Worker:**  
   - Navigate to the **Workers** tab from the dashboard sidebar.
   - Click **"Create a Service"** (or **"Create a Worker"** if you're using the Workers dashboard).  
   - Give your service a name (for example, "URL-Rewrite").

3. **Paste Your Script:**  
   In the online editor, paste the Cloudflare Worker script that you want to deploy (the script that handles the URL rewriting).

4. **Test the Worker:**  
   Use the built-in preview or "Quick Edit" feature to test the worker. You can simulate requests to ensure that the rewrite rules work as expected.

5. **Configure Routes:**  
   To ensure that your Worker intercepts requests to your specified source URL:
   - Navigate to the **"Triggers"** (or **"Routes"**) section.
   - Add a route that matches your source URL pattern (for example, `lp.sculptnation.com/*`).  
   This tells Cloudflare which requests should be handled by your worker.

6. **Deploy the Worker:**  
   Once you’re satisfied with your testing, click **"Deploy"** (or **"Save and Deploy"**) to publish your worker.

7. **Verify the Deployment:**  
   After deployment, visit the source URL (with query parameters, if any) and confirm that the URL rewrite is occurring as intended.

### Optional: Using Wrangler CLI

If you prefer using the command line, you can install the Cloudflare Workers CLI tool called **Wrangler**. Here's a brief overview:

- **Install Wrangler:**  
  ```bash
  npm install -g wrangler
  ```

- **Initialize Your Project:**  
  ```bash
  wrangler generate url-rewrite
  cd url-rewrite
  ```

- **Paste Your Code:**  
  Replace the contents of the generated `index.js` (or `worker.js`) with your URL rewrite script.

- **Publish Your Worker:**  
  ```bash
  wrangler publish
  ```

Using either the online editor or Wrangler, you can deploy your Cloudflare Worker to handle your URL rewrites as needed.