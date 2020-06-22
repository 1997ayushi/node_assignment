module.exports = {
   value: (req, res) => {
       var array = [
           {
               "name":"qwe",
               "info": {
                    "email":"qwe@mail.com",
                    "systemID":"CXXXXX",
                    "role":"developer"
               }
           },
           {
            "name":"abc",
            "info": {
                 "email":"abc@mail.com",
                 "systemID":"000000",
                 "role":"testing"
            }
        },
        {
            "name":"xyz",
            "info": {
                 "email":"xyz@mail.com",
                 "systemID":"123456",
                 "role":"analyst"
            }
        }
    ]
    var objIndex = array.findIndex((obj => obj.name == "qwe"));
    array[objIndex].info.systemID = "C301138";
    res.send(array);
   }
}