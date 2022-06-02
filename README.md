Run the server `npm run start` , will start nodemon in port 6000

**Below are the api's**

1. **/login** -> GET
    Request: /login/:emailId/:password
        Example: /login/xyz@gmail.com/welcome@123
    Response: `{ id: c206240c-dc85-49d2-8c13-825719782ad9}`

2.**/user** -> POST
    Request: /create-user
        Example: /create-user
    Response: `{"Successfully inserted user into db"}`

3.**/user** -> DELETE
    Request: /user/:userId
        Example: /user/:101
    Respose: `{"user successfully deleted"}`

4. **/folder** -> GET
    Request: /folder
        Example: /folder
    Response: `Array of objects-> _id: objectId("6296679a74ffdd6c08f8a54d")`
                                  `id:1002`
                                   `name: "Folder 2"`
                                   `owner_id:c206240c-dc85-49d2-8c13-825719782ad9`
                                   `createdAt:"31-05-2022"`
                                   `__v:0`


5.**/folder** -> POST
    Request: /folder
        Example: /folder
    Response: `{"Successfully inserted folder into db"}`   

6.**/folder** -> PUT
    Request: /folder
        Example: /folder
    Response: `{"File has been moved to destination folder"}`

7.**/folder** -> DELETE
    Request: /folder/:userId/:folderId
        Example: /folder/:c206240c-dc85-49d2-8c13-825719782ad9/:1001
    Response: `{"folder successfully deleted"}`

8.**/file** -> GET
    Request: /file
        Example: /file
    Response: `Array of objects-> _id: objectId("629666ed502e9f29ccf61070")`
                                  `id: "5002"`
                                  `name: "file number 2"`
                                  `folder_id: "1001"`
                                  `owner_id: "c206240c-dc85-49d2-8c13-825719782ad9"`
                                  `extension: ".doc"`
                                  `content: "This is the first file created"`
                                  `createdAt: "31-05-2022"`
                                  `_v:0`

9.**/file** -> POST
    Request: /file
        Example: /file
    Response: `{"Successfully inserted file into db"}`  

10.**/file** -> DELETE
    Request: /file/:userId/:fileId
        Example: /file/:f9af9c79-e095-482c-8ba4-cf2966d9e590/:5003
    Response: `{"file successfully deleted"}`

11.**/home** -> GET
    Request: /home/:userid
        Example: /home/:c206240c-dc85-49d2-8c13-825719782ad9
    Response: `Array of objects-> _id: ("629666ed502e9f29ccf61070")`
                                  `id: "5004"`
                                  `name: "file number 1"`
                                  `folder_id: "1000"`
                                  `owner_id: "c206240c-dc85-49d2-8c13-825719782ad9"`
                                  `extension: ".pdf"`
                                  `content: "This is the first file created for user 1 without folder"`
                                  `createdAt: "31-05-2022"`
                                  ``
                                  ``
                                  `_v:0`
                                  `_id: ("6296679a74ffdd6c08f8a54d")`
                                  `id:1001`
                                  `name: "Folder 1"`
                                  `owner_id:c206240c-dc85-49d2-8c13-825719782ad9`
                                  `createdAt:"31-05-2022"`
                                  `__v:0`
                                  `


 12.**/home** -> GET
    Request: /home/:userid/:folderid
        Example: /home/:c206240c-dc85-49d2-8c13-825719782ad9/:1001
    Response: `Array of objects-> _id: ("629666ed502e9f29ccf61070")`
                                  `id: "5002"`
                                  `name: "file number 2"`
                                  `folder_id: "1001"`
                                  `owner_id: "c206240c-dc85-49d2-8c13-825719782ad9"`
                                  `extension: ".pdf"`
                                  `content: "This is the second file created"`
                                  `createdAt: "31-05-2022"`
                                  `__v:0`
                                  ``
                                  ``
                                  `_id: ("629666ed502e9f29ccf61070")`
                                  `id: "5001"`
                                  `name: "file number 1"`
                                  `folder_id: "1001"`
                                  `owner_id: "c206240c-dc85-49d2-8c13-825719782ad9"`
                                  `extension: ".pdf"`
                                  `content: "This is the first file created"`
                                  `createdAt: "31-05-2022"`
                                  `__v:0`                                                                