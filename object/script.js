const sinhVien = [
  {
    "name": "Nguyễn Văn A",
    "address": "Hà Nội, Việt Nam",
    "age": 20,
    "major": "Công nghệ thông tin"
  },
  {
    "name": "Trần Thị B",
    "address": "Hồ Chí Minh, Việt Nam",
    "age": 22,
    "major": "Kinh tế"
  },
  {
    "name": "Lê Minh C",
    "address": "Đà Nẵng, Việt Nam",
    "age": 21,
    "major": "Marketing"
  },
  {
    "name": "Phan Thanh D",
    "address": "Hải Phòng, Việt Nam",
    "age": 23,
    "major": "Luật"
  },
  {
    "name": "Vũ Quang E",
    "address": "Cần Thơ, Việt Nam",
    "age": 20,
    "major": "Thiết kế đồ họa"
  }
];

delete sinhVien[1].name;

const names = sinhVien.map(x => x.name);
console.log(names);

sinhVien.forEach((item, index) => {
    console.log(index, item.age);
})

for (let key in sinhVien) {
    console.log(key, sinhVien[key]);
}