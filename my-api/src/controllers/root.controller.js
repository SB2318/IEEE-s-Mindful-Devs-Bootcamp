export const rootController = (req, res) => {
  res.send(`
  <div style="
    background:#121212;
    color:#00ff9d;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:Consolas, monospace;
    padding:20px;
  ">
    <pre style="
      background:#1e1e1e;
      padding:30px 40px;
      border-radius:12px;
      font-size:18px;
      border:1px solid #333;
    ">
> STATUS: API IS WORKING  
> SERVER: OK  
> DATABASE: CONNECTED  
> MODE: DEVELOPMENT  
    </pre>
  </div>
`);

};
