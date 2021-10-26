const transporter=require("../configs/mail")
const sendEmail=async({to,subject,text,html})=>{

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to:to , // list of receivers
        subject: subject,// Subject line
        text: text, // plain text body
        html: html // html body
      });
}
module.exports=sendEmail