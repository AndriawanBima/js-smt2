const objek =  {

    nama : "smk revit",
    telp : 12345678,

    buah : ["apel", "mangga", "jeruk"],

    coba : function () {
        return "coba function dalam objek";
    },

    boleh : true,
    "tulis aja": 1234,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis aja"]);