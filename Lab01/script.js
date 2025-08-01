let fullName = "Nguyen Trong Khanh Duy";
const birthYear = 2003;
let isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

log = 
`Ten: ${fullName}
Tuoi: ${currentYear - birthYear}
Sinh vien: ${isStudent ? "Dung" : "Sai"}`;

console.log(log);