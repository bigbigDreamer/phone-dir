//mongodb+srv://admin:<password>@cluster0-zqk4e.mongodb.net/test?retryWrites=true&w=majority

const connectAddr = 'mongodb+srv://xxx:xxx@cluster0-zqk4e.mongodb.net/phoneList?retryWrites=true&w=majority';
//注意，此时替换<password>的时候，需要删除尖括号

module.exports = connectAddr;