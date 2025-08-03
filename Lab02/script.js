const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

const xepLoai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuat sac";
    } else if (diemTB >= 8) {
        return "Gioi";
    } else if (diemTB >= 6.5) {
        return "Kha";
    } else {
        return "Trung binh";
    }
}

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);

console.log(
`Diem trung binh: ${diemTB.toFixed(1)}
Xep loai: ${xepLoai(diemTB)}`
);