export const student= (req, res) => {
    res.json({
      message: "All student fetched"
    });
}
  
export const studentpost= (req, res) => {
    res.json({
      message: "All student Created"
    });
}
export const studentput= (req, res) => {
    const id=req.params.id
    res.json({
      message: "All student Updated",
      userId: id 
    });
}
export const studentdelete= (req, res) => {
    const id=req.params.id
    res.json({
      message: "All student Deleted",
      userId: id 
    });
}

export const studentData =(req,res)=> {
  res.render('student.ejs');
  res.json({name: 'Jomol joseph',
  age: 24,
  rollno:1
});
}
