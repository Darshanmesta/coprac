module.exports={
    home:(req,res)=>{

     

       

        

        res.render('index')
    },

    create:(req,res)=>{
        res.render('createpage')
    },

    update:(req,res)=>{
        let data=req.body.user

        res.cookie('user',data,{expire:36000 + Date.now()})
        res.send("New cookie constructed <a href='/'>Return Home </a>")
    },

    clear:(req,res)=>{
        res.clearCookie('user')
        res.send("Cookie Cleared successfully  <a href='/'>Return Home </a>")
    }



    

}