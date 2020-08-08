var firebase = require("firebase");

export const uploadFileToFirebaseStorage = (iconFile, callback) => {
    const fileName = iconFile.name;
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const uploadTask = storageRef.child("/documents/" + fileName).put(iconFile);

    uploadTask.on("state_changed",
        (snapshot) => {     // progrss function ....
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            callback({ progress });
        },
        (error) => {        // error function ....
            callback({ error });
        },
        (res) => {          // complete function ....
            storageRef.child("/documents/" + fileName).getDownloadURL().then((url) => {
                console.log(url);
                callback({ url });
                // add url to the database if it is required
            })
        }
    );
};