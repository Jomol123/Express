import express from 'express';

const expleRouter = express.Router();

expleRouter.get("/data", (req, res) => {
  res.json({
    message: "All data fetched"
  });
});

expleRouter.get("/data/:id", (req, res) => {
    res.json({
      message: "All data fetched the given id"
    });
  });
  expleRouter.put("/data", (req, res) => {
    res.json({
      message: "updated"
    });
  });
  expleRouter.delete("/data", (req, res) => {
    res.json({
      message: "deleted"
    });
  });

  expleRouter.post("/data", (req, res) => {
    
  
    res.json({
      message: "Data created",
      
    });
  });


export default expleRouter;
