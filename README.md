
## App
This app implements POST-Redirect-GET-pattern, written in javascript. This is 
a [Next.js](https://nextjs.org/) project bootstrapped 
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
```
- React.js (client)
- Node.js, Express.js, Next.js (Backend)
```

## Getting Started
First, run the development server:

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start 
editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as 
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


### client pages
[home page](http://localhost:3000/) <br/>
[suceess page](http://localhost:3000/success/:value) <br/>

Any client related code can we found in 
- `Home Page - pages/index.js` 
- `Success Page - pages/success/[id]/index.js`. 

Api related code can be found in 
- `pages/api/checknumber` 
- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
   [http://localhost:3000/api/checknumber](http://localhost:3001/api/checknumbero).
   This endpoint can be edited in `pages/api/checknumber.js`.
   - `/checknumber` <br/>
      This api validates whether the submitted input is a number or not.
      if  its a number then redirect to [http://localhost:3000/success/:value](http://localhost:3001/success/:value) .
      If not a number, throws a validation error.

     - `middleware/validate.js`
       - A custom middleware to handle the validation , if failed it throws status 400 and returns the 
       - json object. 
       ```
       {
          error: "message",
          message: "this error message"
       }
       ```
