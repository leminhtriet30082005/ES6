const sinhvien = { tenchinh: "Triết", tenlot: "Lê Minh ", tuoi: 19, courses: ["WEB", "IT"] };
function lylichsinhvien({ tenchinh, tenlot, tuoi, courses }) {
  return `sinh viên tên ${tenchinh} ${tenlot}và ${tuoi} tuổi và đang học môn học ${courses.join(", ")}.`;
}
console.log(lylichsinhvien(sinhvien));