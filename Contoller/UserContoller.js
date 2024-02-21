export const user= (req, res) => {
    res.json({
      message: "All user fetched"
    });
}
  
export const userpost= (req, res) => {
    res.json({
      message: "All user Created"
    });
}
export const userput= (req, res) => {
    const id=req.params.id
    res.json({
      message: "All user Updated",
      userId: id 
    });
}
export const userdelete= (req, res) => {
    const id=req.params.id
    res.json({
      message: "All user Deleted",
      userId: id 
    });
}

export const userData =(req,res)=> {
  res.render('user.ejs');
  res.json({Name: 'Jomol joseph',
  Email:"jomolannjoseph@gmail.com"
});
}
