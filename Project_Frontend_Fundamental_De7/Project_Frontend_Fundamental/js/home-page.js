let tests = [];
let currentPage = 1;
let itemsPerPage = 6;
let currentQuizList = [];
function loadTestsFromLocalStorage(){
    let savedTests = localStorage.getItem("tests");
    if(savedTests){
        tests = JSON.parse(savedTests);
    }else{
        tests = [
            {
                id: 1,
                image: "../assets/images/Image.png",
                testName: "Quiz về Lịch sử",
                categoryId: "Lịch sử",
                emoji: "📚",
                playTime: 10,
                playAmount: 15,
                questions: [
                    {
                        content: "Ai được biết đến như là người cha của lịch sử?",
                        answers: [
                            { answer: "Herodotus", isCorrected: true },
                            { answer: "Socrates" },
                            { answer: "Plato" },
                            { answer: "Aristotle" }
                        ]
                    },
                    {
                        content: "Chiến tranh thế giới thứ hai kết thúc vào năm nào?",
                        answers: [
                            { answer: "1940" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1939" }
                        ]
                    },
                    {
                        content: "Ai là vị tướng nổi tiếng trong Chiến tranh Việt Nam?",
                        answers: [
                            { answer: "Nguyễn Ái Quốc" },
                            { answer: "Võ Nguyên Giáp", isCorrected: true },
                            { answer: "Lê Duẩn" },
                            { answer: "Trường Chinh" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra châu Mỹ vào năm 1492?",
                        answers: [
                            { answer: "Ferdinand Magellan" },
                            { answer: "Christopher Columbus", isCorrected: true },
                            { answer: "Vasco da Gama" },
                            { answer: "Marco Polo" }
                        ]
                    },
                    {
                        content: "Triều đại phong kiến lâu đời nhất ở Việt Nam là gì?",
                        answers: [
                            { answer: "Nhà Nguyễn" },
                            { answer: "Nhà Trần" },
                            { answer: "Nhà Lê" },
                            { answer: "Nhà Hồng Bàng", isCorrected: true }
                        ]
                    },
                    {
                        content: "Ai là vị vua sáng lập ra triều đại nhà Nguyễn?",
                        answers: [
                            { answer: "Vua Gia Long", isCorrected: true },
                            { answer: "Vua Minh Mạng" },
                            { answer: "Vua Quang Trung" },
                            { answer: "Vua Tự Đức" }
                        ]
                    },
                    {
                        content: "Cuộc cách mạng nào diễn ra ở Pháp năm 1789?",
                        answers: [
                            { answer: "Cách mạng công nghiệp" },
                            { answer: "Cách mạng tư sản", isCorrected: true },
                            { answer: "Cách mạng văn hóa" },
                            { answer: "Cách mạng xanh" }
                        ]
                    },
                    {
                        content: "Ai là người khởi xướng cuộc chiến tranh nhân dân ở Việt Nam?",
                        answers: [
                            { answer: "Hồ Chí Minh", isCorrected: true },
                            { answer: "Võ Nguyên Giáp" },
                            { answer: "Lê Đức Thọ" },
                            { answer: "Phạm Văn Đồng" }
                        ]
                    },
                    {
                        content: "Chiến tranh Lạnh giữa hai siêu cường thế giới kéo dài bao lâu?",
                        answers: [
                            { answer: "40 năm" },
                            { answer: "45 năm", isCorrected: true },
                            { answer: "30 năm" },
                            { answer: "50 năm" }
                        ]
                    },
                    {
                        content: "Tuyên ngôn độc lập của Hoa Kỳ được ký vào năm nào?",
                        answers: [
                            { answer: "1776", isCorrected: true },
                            { answer: "1789" },
                            { answer: "1800" },
                            { answer: "1812" }
                        ]
                    },
                    {
                        content: "Trận chiến nào đã kết thúc chiến tranh thế giới thứ nhất?",
                        answers: [
                            { answer: "Trận Berlin" },
                            { answer: "Trận Waterloo" },
                            { answer: "Hiệp định Versailles", isCorrected: true },
                            { answer: "Trận Normandy" }
                        ]
                    },
                    {
                        content: "Ai là hoàng đế nổi tiếng của La Mã cổ đại?",
                        answers: [
                            { answer: "Alexander Đại Đế" },
                            { answer: "Julius Caesar", isCorrected: true },
                            { answer: "Constantine" },
                            { answer: "Nero" }
                        ]
                    },
                    {
                        content: "Chiến tranh Trăm Năm giữa Anh và Pháp kéo dài bao lâu?",
                        answers: [
                            { answer: "100 năm", isCorrected: true },
                            { answer: "80 năm" },
                            { answer: "120 năm" },
                            { answer: "90 năm" }
                        ]
                    },
                    {
                        content: "Thành phố cổ nào bị chôn vùi dưới tro núi lửa vào năm 79 SCN?",
                        answers: [
                            { answer: "Rome" },
                            { answer: "Pompeii", isCorrected: true },
                            { answer: "Athens" },
                            { answer: "Babylon" }
                        ]
                    },
                    {
                        content: "Hiến chương Liên Hợp Quốc được ký vào năm nào?",
                        answers: [
                            { answer: "1941" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1960" }
                        ]
                    }            
                ]
            },
            {
                id: 2,
                image: "../assets/images/Image.png",
                testName: "Quiz về Khoa học",
                categoryId: "Khoa học",
                emoji: "🧠",
                playTime: 15,
                playAmount: 20,
                questions: [
                    {
                        content: "Nước có tên gọi khoa học là gì?",
                        answers: [
                            { answer: "H2O", isCorrected: true },
                            { answer: "O2" },
                            { answer: "H2" },
                            { answer: "HO" }
                        ]
                    },
                    {
                        content: "Hành tinh nào được gọi là 'Hành tinh Đỏ'?",
                        answers: [
                            { answer: "Trái Đất" },
                            { answer: "Sao Hỏa", isCorrected: true },
                            { answer: "Sao Kim" },
                            { answer: "Sao Thổ" }
                        ]
                    },
                    {
                        content: "Ánh sáng di chuyển nhanh nhất qua môi trường nào?",
                        answers: [
                            { answer: "Chất rắn" },
                            { answer: "Chất lỏng" },
                            { answer: "Chân không", isCorrected: true },
                            { answer: "Khí quyển" }
                        ]
                    },
                    {
                        content: "Nguyên tố nào là cơ bản trong sự sống của con người?",
                        answers: [
                            { answer: "Carbon (C)", isCorrected: true },
                            { answer: "Hydrogen (H)" },
                            { answer: "Oxygen (O)" },
                            { answer: "Nitrogen (N)" }
                        ]
                    },
                    {
                        content: "Đơn vị đo cường độ dòng điện là gì?",
                        answers: [
                            { answer: "Volt" },
                            { answer: "Ohm" },
                            { answer: "Watt" },
                            { answer: "Ampe", isCorrected: true }
                        ]
                    },
                    {
                        content: "Cơ thể con người chứa bao nhiêu phần trăm nước?",
                        answers: [
                            { answer: "50%" },
                            { answer: "60%", isCorrected: true },
                            { answer: "70%" },
                            { answer: "80%" }
                        ]
                    },
                    {
                        content: "Thành phần chính của mặt trời là gì?",
                        answers: [
                            { answer: "Helium và Hydrogen", isCorrected: true },
                            { answer: "Carbon và Nitrogen" },
                            { answer: "Oxygen và Helium" },
                            { answer: "Hydrogen và Nitrogen" }
                        ]
                    },
                    {
                        content: "Loài động vật nào có thể tái tạo lại các phần cơ thể bị mất?",
                        answers: [
                            { answer: "Ếch" },
                            { answer: "Kỳ nhông", isCorrected: true },
                            { answer: "Chuột" },
                            { answer: "Rắn" }
                        ]
                    },
                    {
                        content: "Lớp khí quyển nào chứa tầng ozone?",
                        answers: [
                            { answer: "Tầng đối lưu" },
                            { answer: "Tầng bình lưu", isCorrected: true },
                            { answer: "Tầng trung lưu" },
                            { answer: "Tầng ngoài khí quyển" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra lực hấp dẫn?",
                        answers: [
                            { answer: "Albert Einstein" },
                            { answer: "Isaac Newton", isCorrected: true },
                            { answer: "Galileo Galilei" },
                            { answer: "Niels Bohr" }
                        ]
                    }        
                ]
            },
            {
                id: 3,
                image: "../assets/images/Image.png",
                image: "../assets/images/Image.png",
                testName: "Quiz về đời sống",
                categoryId: "Đời sống",
                emoji: "🏠",
                playTime: 20,
                playAmount: 40,
                questions: [
                    {
                        content: "Kết quả của phép toán 2 + 2 là bao nhiêu?",
                        answers: [
                            { answer: "3" },
                            { answer: "4", isCorrected: true },
                            { answer: "5" },
                            { answer: "6" }
                        ]
                    },
                    {
                        content: "Số Pi (π) có giá trị xấp xỉ là bao nhiêu?",
                        answers: [
                            { answer: "3.14159", isCorrected: true },
                            { answer: "3.14" },
                            { answer: "3.0" },
                            { answer: "4.0" }
                        ]
                    },
                    {
                        content: "Phương trình x² - 4 = 0 có nghiệm là gì?",
                        answers: [
                            { answer: "x = 2; x = -2", isCorrected: true },
                            { answer: "x = 4; x = -4" },
                            { answer: "x = 0; x = 4" },
                            { answer: "x = 1; x = -1" }
                        ]
                    },
                    {
                        content: "Góc nhọn có giá trị bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "Dưới 90 độ", isCorrected: true },
                            { answer: "Trên 90 độ" },
                            { answer: "Bằng 180 độ" }
                        ]
                    },
                    {
                        content: "Định lý Pythagoras áp dụng cho tam giác nào?",
                        answers: [
                            { answer: "Tam giác đều" },
                            { answer: "Tam giác vuông", isCorrected: true },
                            { answer: "Tam giác cân" },
                            { answer: "Tam giác tù" }
                        ]
                    },
                    {
                        content: "Tổng của các góc trong một tam giác là bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "180 độ", isCorrected: true },
                            { answer: "360 độ" },
                            { answer: "270 độ" }
                        ]
                    },
                    {
                        content: "Số nào là số nguyên tố đầu tiên?",
                        answers: [
                            { answer: "0" },
                            { answer: "1" },
                            { answer: "2", isCorrected: true },
                            { answer: "3" }
                        ]
                    },
                    {
                        content: "Công thức tính diện tích hình tròn là gì?",
                        answers: [
                            { answer: "π × bán kính", isCorrected: true },
                            { answer: "π × bán kính × chu vi" },
                            { answer: "π × chu vi" },
                            { answer: "π × đường kính" }
                        ]
                    }
                ]
            },
            {
                id: 4,
                image: "../assets/images/Image.png",
                testName: "Quiz về Poker",
                categoryId: "Poker",
                emoji: "🍾",
                playTime: 12,
                playAmount: 13,
                questions: [
                    {
                        content: "Ai được biết đến như là người cha của lịch sử?",
                        answers: [
                            { answer: "Herodotus", isCorrected: true },
                            { answer: "Socrates" },
                            { answer: "Plato" },
                            { answer: "Aristotle" }
                        ]
                    },
                    {
                        content: "Chiến tranh thế giới thứ hai kết thúc vào năm nào?",
                        answers: [
                            { answer: "1940" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1939" }
                        ]
                    },
                    {
                        content: "Ai là vị tướng nổi tiếng trong Chiến tranh Việt Nam?",
                        answers: [
                            { answer: "Nguyễn Ái Quốc" },
                            { answer: "Võ Nguyên Giáp", isCorrected: true },
                            { answer: "Lê Duẩn" },
                            { answer: "Trường Chinh" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra châu Mỹ vào năm 1492?",
                        answers: [
                            { answer: "Ferdinand Magellan" },
                            { answer: "Christopher Columbus", isCorrected: true },
                            { answer: "Vasco da Gama" },
                            { answer: "Marco Polo" }
                        ]
                    },
                    {
                        content: "Triều đại phong kiến lâu đời nhất ở Việt Nam là gì?",
                        answers: [
                            { answer: "Nhà Nguyễn" },
                            { answer: "Nhà Trần" },
                            { answer: "Nhà Lê" },
                            { answer: "Nhà Hồng Bàng", isCorrected: true }
                        ]
                    },
                    {
                        content: "Ai là vị vua sáng lập ra triều đại nhà Nguyễn?",
                        answers: [
                            { answer: "Vua Gia Long", isCorrected: true },
                            { answer: "Vua Minh Mạng" },
                            { answer: "Vua Quang Trung" },
                            { answer: "Vua Tự Đức" }
                        ]
                    },
                    {
                        content: "Cuộc cách mạng nào diễn ra ở Pháp năm 1789?",
                        answers: [
                            { answer: "Cách mạng công nghiệp" },
                            { answer: "Cách mạng tư sản", isCorrected: true },
                            { answer: "Cách mạng văn hóa" },
                            { answer: "Cách mạng xanh" }
                        ]
                    },
                    {
                        content: "Ai là người khởi xướng cuộc chiến tranh nhân dân ở Việt Nam?",
                        answers: [
                            { answer: "Hồ Chí Minh", isCorrected: true },
                            { answer: "Võ Nguyên Giáp" },
                            { answer: "Lê Đức Thọ" },
                            { answer: "Phạm Văn Đồng" }
                        ]
                    },
                    {
                        content: "Chiến tranh Lạnh giữa hai siêu cường thế giới kéo dài bao lâu?",
                        answers: [
                            { answer: "40 năm" },
                            { answer: "45 năm", isCorrected: true },
                            { answer: "30 năm" },
                            { answer: "50 năm" }
                        ]
                    },
                    {
                        content: "Tuyên ngôn độc lập của Hoa Kỳ được ký vào năm nào?",
                        answers: [
                            { answer: "1776", isCorrected: true },
                            { answer: "1789" },
                            { answer: "1800" },
                            { answer: "1812" }
                        ]
                    },
                    {
                        content: "Trận chiến nào đã kết thúc chiến tranh thế giới thứ nhất?",
                        answers: [
                            { answer: "Trận Berlin" },
                            { answer: "Trận Waterloo" },
                            { answer: "Hiệp định Versailles", isCorrected: true },
                            { answer: "Trận Normandy" }
                        ]
                    },
                    {
                        content: "Trận chiến nào đã kết thúc chiến tranh thế giới thứ nhất?",
                        answers: [
                            { answer: "Trận Berlin" },
                            { answer: "Trận Waterloo" },
                            { answer: "Hiệp định Versailles", isCorrected: true },
                            { answer: "Trận Normandy" }
                        ]
                    },
                    {
                        content: "Trận chiến nào đã kết thúc chiến tranh thế giới thứ nhất?",
                        answers: [
                            { answer: "Trận Berlin" },
                            { answer: "Trận Waterloo" },
                            { answer: "Hiệp định Versailles", isCorrected: true },
                            { answer: "Trận Normandy" }
                        ]
                    },
                    {
                        content: "Ai là hoàng đế nổi tiếng của La Mã cổ đại?",
                        answers: [
                            { answer: "Alexander Đại Đế" },
                            { answer: "Julius Caesar", isCorrected: true },
                            { answer: "Constantine" },
                            { answer: "Nero" }
                        ]
                    },
                    {
                        content: "Chiến tranh Trăm Năm giữa Anh và Pháp kéo dài bao lâu?",
                        answers: [
                            { answer: "100 năm", isCorrected: true },
                            { answer: "80 năm" },
                            { answer: "120 năm" },
                            { answer: "90 năm" }
                        ]
                    },
                    {
                        content: "Thành phố cổ nào bị chôn vùi dưới tro núi lửa vào năm 79 SCN?",
                        answers: [
                            { answer: "Rome" },
                            { answer: "Pompeii", isCorrected: true },
                            { answer: "Athens" },
                            { answer: "Babylon" }
                        ]
                    },
                    {
                        content: "Hiến chương Liên Hợp Quốc được ký vào năm nào?",
                        answers: [
                            { answer: "1941" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1960" }
                        ]
                    }            
                ]
            },
            {
                id: 5,
                image: "../assets/images/Image.png",
                testName: "Quiz về Ngữ Văn",
                categoryId: "Ngữ văn",
                emoji: "✍️",
                playTime: 60,
                playAmount: 23,
                questions: [
                    {
                        content: "Nước có tên gọi khoa học là gì?",
                        answers: [
                            { answer: "H2O", isCorrected: true },
                            { answer: "O2" },
                            { answer: "H2" },
                            { answer: "HO" }
                        ]
                    },
                    {
                        content: "Hành tinh nào được gọi là 'Hành tinh Đỏ'?",
                        answers: [
                            { answer: "Trái Đất" },
                            { answer: "Sao Hỏa", isCorrected: true },
                            { answer: "Sao Kim" },
                            { answer: "Sao Thổ" }
                        ]
                    },
                    {
                        content: "Ánh sáng di chuyển nhanh nhất qua môi trường nào?",
                        answers: [
                            { answer: "Chất rắn" },
                            { answer: "Chất lỏng" },
                            { answer: "Chân không", isCorrected: true },
                            { answer: "Khí quyển" }
                        ]
                    },
                    {
                        content: "Nguyên tố nào là cơ bản trong sự sống của con người?",
                        answers: [
                            { answer: "Carbon (C)", isCorrected: true },
                            { answer: "Hydrogen (H)" },
                            { answer: "Oxygen (O)" },
                            { answer: "Nitrogen (N)" }
                        ]
                    },
                    {
                        content: "Đơn vị đo cường độ dòng điện là gì?",
                        answers: [
                            { answer: "Volt" },
                            { answer: "Ohm" },
                            { answer: "Watt" },
                            { answer: "Ampe", isCorrected: true }
                        ]
                    },
                    {
                        content: "Cơ thể con người chứa bao nhiêu phần trăm nước?",
                        answers: [
                            { answer: "50%" },
                            { answer: "60%", isCorrected: true },
                            { answer: "70%" },
                            { answer: "80%" }
                        ]
                    },
                    {
                        content: "Thành phần chính của mặt trời là gì?",
                        answers: [
                            { answer: "Helium và Hydrogen", isCorrected: true },
                            { answer: "Carbon và Nitrogen" },
                            { answer: "Oxygen và Helium" },
                            { answer: "Hydrogen và Nitrogen" }
                        ]
                    },
                    {
                        content: "Loài động vật nào có thể tái tạo lại các phần cơ thể bị mất?",
                        answers: [
                            { answer: "Ếch" },
                            { answer: "Kỳ nhông", isCorrected: true },
                            { answer: "Chuột" },
                            { answer: "Rắn" }
                        ]
                    },
                    {
                        content: "Lớp khí quyển nào chứa tầng ozone?",
                        answers: [
                            { answer: "Tầng đối lưu" },
                            { answer: "Tầng bình lưu", isCorrected: true },
                            { answer: "Tầng trung lưu" },
                            { answer: "Tầng ngoài khí quyển" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra lực hấp dẫn?",
                        answers: [
                            { answer: "Albert Einstein" },
                            { answer: "Isaac Newton", isCorrected: true },
                            { answer: "Galileo Galilei" },
                            { answer: "Niels Bohr" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra lực hấp dẫn?",
                        answers: [
                            { answer: "Albert Einstein" },
                            { answer: "Isaac Newton", isCorrected: true },
                            { answer: "Galileo Galilei" },
                            { answer: "Niels Bohr" }
                        ]
                    }      
                ]
            },
            {
                id: 6,
                image: "../assets/images/Image.png",
                testName: "Quiz về đua xe",
                categoryId: "Đua xe",
                emoji: "🚴",
                playTime: 10,
                playAmount: 40,
                questions: [
                    {
                        content: "Kết quả của phép toán 2 + 2 là bao nhiêu?",
                        answers: [
                            { answer: "3" },
                            { answer: "4", isCorrected: true },
                            { answer: "5" },
                            { answer: "6" }
                        ]
                    },
                    {
                        content: "Số Pi (π) có giá trị xấp xỉ là bao nhiêu?",
                        answers: [
                            { answer: "3.14159", isCorrected: true },
                            { answer: "3.14" },
                            { answer: "3.0" },
                            { answer: "4.0" }
                        ]
                    },
                    {
                        content: "Phương trình x² - 4 = 0 có nghiệm là gì?",
                        answers: [
                            { answer: "x = 2; x = -2", isCorrected: true },
                            { answer: "x = 4; x = -4" },
                            { answer: "x = 0; x = 4" },
                            { answer: "x = 1; x = -1" }
                        ]
                    },
                    {
                        content: "Góc nhọn có giá trị bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "Dưới 90 độ", isCorrected: true },
                            { answer: "Trên 90 độ" },
                            { answer: "Bằng 180 độ" }
                        ]
                    },
                    {
                        content: "Định lý Pythagoras áp dụng cho tam giác nào?",
                        answers: [
                            { answer: "Tam giác đều" },
                            { answer: "Tam giác vuông", isCorrected: true },
                            { answer: "Tam giác cân" },
                            { answer: "Tam giác tù" }
                        ]
                    },
                    {
                        content: "Tổng của các góc trong một tam giác là bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "180 độ", isCorrected: true },
                            { answer: "360 độ" },
                            { answer: "270 độ" }
                        ]
                    },
                    {
                        content: "Số nào là số nguyên tố đầu tiên?",
                        answers: [
                            { answer: "0" },
                            { answer: "1" },
                            { answer: "2", isCorrected: true },
                            { answer: "3" }
                        ]
                    },
                    {
                        content: "Công thức tính diện tích hình tròn là gì?",
                        answers: [
                            { answer: "π × bán kính", isCorrected: true },
                            { answer: "π × bán kính × chu vi" },
                            { answer: "π × chu vi" },
                            { answer: "π × đường kính" }
                        ]
                    }
                ]
            },
            {
                id: 7,
                image: "../assets/images/Image.png",
                testName: "Quiz về Vật lí",
                categoryId: "Vật lí",
                emoji: "📱",
                playTime: 20,
                playAmount: 17,
                questions: [
                    {
                        content: "Ai được biết đến như là người cha của lịch sử?",
                        answers: [
                            { answer: "Herodotus", isCorrected: true },
                            { answer: "Socrates" },
                            { answer: "Plato" },
                            { answer: "Aristotle" }
                        ]
                    },
                    {
                        content: "Chiến tranh thế giới thứ hai kết thúc vào năm nào?",
                        answers: [
                            { answer: "1940" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1939" }
                        ]
                    },
                    {
                        content: "Ai là vị tướng nổi tiếng trong Chiến tranh Việt Nam?",
                        answers: [
                            { answer: "Nguyễn Ái Quốc" },
                            { answer: "Võ Nguyên Giáp", isCorrected: true },
                            { answer: "Lê Duẩn" },
                            { answer: "Trường Chinh" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra châu Mỹ vào năm 1492?",
                        answers: [
                            { answer: "Ferdinand Magellan" },
                            { answer: "Christopher Columbus", isCorrected: true },
                            { answer: "Vasco da Gama" },
                            { answer: "Marco Polo" }
                        ]
                    },
                    {
                        content: "Triều đại phong kiến lâu đời nhất ở Việt Nam là gì?",
                        answers: [
                            { answer: "Nhà Nguyễn" },
                            { answer: "Nhà Trần" },
                            { answer: "Nhà Lê" },
                            { answer: "Nhà Hồng Bàng", isCorrected: true }
                        ]
                    },
                    {
                        content: "Ai là người khởi xướng cuộc chiến tranh nhân dân ở Việt Nam?",
                        answers: [
                            { answer: "Hồ Chí Minh", isCorrected: true },
                            { answer: "Võ Nguyên Giáp" },
                            { answer: "Lê Đức Thọ" },
                            { answer: "Phạm Văn Đồng" }
                        ]
                    },
                    {
                        content: "Chiến tranh Lạnh giữa hai siêu cường thế giới kéo dài bao lâu?",
                        answers: [
                            { answer: "40 năm" },
                            { answer: "45 năm", isCorrected: true },
                            { answer: "30 năm" },
                            { answer: "50 năm" }
                        ]
                    },
                    {
                        content: "Tuyên ngôn độc lập của Hoa Kỳ được ký vào năm nào?",
                        answers: [
                            { answer: "1776", isCorrected: true },
                            { answer: "1789" },
                            { answer: "1800" },
                            { answer: "1812" }
                        ]
                    },
                    {
                        content: "Trận chiến nào đã kết thúc chiến tranh thế giới thứ nhất?",
                        answers: [
                            { answer: "Trận Berlin" },
                            { answer: "Trận Waterloo" },
                            { answer: "Hiệp định Versailles", isCorrected: true },
                            { answer: "Trận Normandy" }
                        ]
                    },
                    {
                        content: "Ai là hoàng đế nổi tiếng của La Mã cổ đại?",
                        answers: [
                            { answer: "Alexander Đại Đế" },
                            { answer: "Julius Caesar", isCorrected: true },
                            { answer: "Constantine" },
                            { answer: "Nero" }
                        ]
                    },
                    {
                        content: "Chiến tranh Trăm Năm giữa Anh và Pháp kéo dài bao lâu?",
                        answers: [
                            { answer: "100 năm", isCorrected: true },
                            { answer: "80 năm" },
                            { answer: "120 năm" },
                            { answer: "90 năm" }
                        ]
                    },
                    {
                        content: "Thành phố cổ nào bị chôn vùi dưới tro núi lửa vào năm 79 SCN?",
                        answers: [
                            { answer: "Rome" },
                            { answer: "Pompeii", isCorrected: true },
                            { answer: "Athens" },
                            { answer: "Babylon" }
                        ]
                    },
                    {
                        content: "Hiến chương Liên Hợp Quốc được ký vào năm nào?",
                        answers: [
                            { answer: "1941" },
                            { answer: "1945", isCorrected: true },
                            { answer: "1950" },
                            { answer: "1960" }
                        ]
                    }            
                ]
            },
            {
                id: 8,
                image: "../assets/images/Image.png",
                testName: "Quiz về Sinh học",
                categoryId: "Sinh học",
                emoji: "🧠",
                playTime: 20,
                playAmount: 28,
                questions: [
                    {
                        content: "Nước có tên gọi khoa học là gì?",
                        answers: [
                            { answer: "H2O", isCorrected: true },
                            { answer: "O2" },
                            { answer: "H2" },
                            { answer: "HO" }
                        ]
                    },
                    {
                        content: "Nước có tên gọi khoa học là gì?",
                        answers: [
                            { answer: "H2O", isCorrected: true },
                            { answer: "O2" },
                            { answer: "H2" },
                            { answer: "HO" }
                        ]
                    },
                    {
                        content: "Nước có tên gọi khoa học là gì?",
                        answers: [
                            { answer: "H2O", isCorrected: true },
                            { answer: "O2" },
                            { answer: "H2" },
                            { answer: "HO" }
                        ]
                    },
                    {
                        content: "Hành tinh nào được gọi là 'Hành tinh Đỏ'?",
                        answers: [
                            { answer: "Trái Đất" },
                            { answer: "Sao Hỏa", isCorrected: true },
                            { answer: "Sao Kim" },
                            { answer: "Sao Thổ" }
                        ]
                    },
                    {
                        content: "Ánh sáng di chuyển nhanh nhất qua môi trường nào?",
                        answers: [
                            { answer: "Chất rắn" },
                            { answer: "Chất lỏng" },
                            { answer: "Chân không", isCorrected: true },
                            { answer: "Khí quyển" }
                        ]
                    },
                    {
                        content: "Nguyên tố nào là cơ bản trong sự sống của con người?",
                        answers: [
                            { answer: "Carbon (C)", isCorrected: true },
                            { answer: "Hydrogen (H)" },
                            { answer: "Oxygen (O)" },
                            { answer: "Nitrogen (N)" }
                        ]
                    },
                    {
                        content: "Đơn vị đo cường độ dòng điện là gì?",
                        answers: [
                            { answer: "Volt" },
                            { answer: "Ohm" },
                            { answer: "Watt" },
                            { answer: "Ampe", isCorrected: true }
                        ]
                    },
                    {
                        content: "Cơ thể con người chứa bao nhiêu phần trăm nước?",
                        answers: [
                            { answer: "50%" },
                            { answer: "60%", isCorrected: true },
                            { answer: "70%" },
                            { answer: "80%" }
                        ]
                    },
                    {
                        content: "Thành phần chính của mặt trời là gì?",
                        answers: [
                            { answer: "Helium và Hydrogen", isCorrected: true },
                            { answer: "Carbon và Nitrogen" },
                            { answer: "Oxygen và Helium" },
                            { answer: "Hydrogen và Nitrogen" }
                        ]
                    },
                    {
                        content: "Loài động vật nào có thể tái tạo lại các phần cơ thể bị mất?",
                        answers: [
                            { answer: "Ếch" },
                            { answer: "Kỳ nhông", isCorrected: true },
                            { answer: "Chuột" },
                            { answer: "Rắn" }
                        ]
                    },
                    {
                        content: "Lớp khí quyển nào chứa tầng ozone?",
                        answers: [
                            { answer: "Tầng đối lưu" },
                            { answer: "Tầng bình lưu", isCorrected: true },
                            { answer: "Tầng trung lưu" },
                            { answer: "Tầng ngoài khí quyển" }
                        ]
                    },
                    {
                        content: "Ai là người phát hiện ra lực hấp dẫn?",
                        answers: [
                            { answer: "Albert Einstein" },
                            { answer: "Isaac Newton", isCorrected: true },
                            { answer: "Galileo Galilei" },
                            { answer: "Niels Bohr" }
                        ]
                    }        
                ]
            },
            {
                id: 9,
                image: "../assets/images/Image.png",
                testName: "Quiz về Toán học",
                categoryId: "Toán học",
                emoji: "📚",
                playTime: 20,
                playAmount: 40,
                questions: [
                    {
                        content: "Kết quả của phép toán 2 + 2 là bao nhiêu?",
                        answers: [
                            { answer: "3" },
                            { answer: "4", isCorrected: true },
                            { answer: "5" },
                            { answer: "6" }
                        ]
                    },
                    {
                        content: "Số Pi (π) có giá trị xấp xỉ là bao nhiêu?",
                        answers: [
                            { answer: "3.14159", isCorrected: true },
                            { answer: "3.14" },
                            { answer: "3.0" },
                            { answer: "4.0" }
                        ]
                    },
                    {
                        content: "Phương trình x² - 4 = 0 có nghiệm là gì?",
                        answers: [
                            { answer: "x = 2; x = -2", isCorrected: true },
                            { answer: "x = 4; x = -4" },
                            { answer: "x = 0; x = 4" },
                            { answer: "x = 1; x = -1" }
                        ]
                    },
                    {
                        content: "Góc nhọn có giá trị bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "Dưới 90 độ", isCorrected: true },
                            { answer: "Trên 90 độ" },
                            { answer: "Bằng 180 độ" }
                        ]
                    },
                    {
                        content: "Định lý Pythagoras áp dụng cho tam giác nào?",
                        answers: [
                            { answer: "Tam giác đều" },
                            { answer: "Tam giác vuông", isCorrected: true },
                            { answer: "Tam giác cân" },
                            { answer: "Tam giác tù" }
                        ]
                    },
                    {
                        content: "Tổng của các góc trong một tam giác là bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "180 độ", isCorrected: true },
                            { answer: "360 độ" },
                            { answer: "270 độ" }
                        ]
                    },
                    {
                        content: "Số nào là số nguyên tố đầu tiên?",
                        answers: [
                            { answer: "0" },
                            { answer: "1" },
                            { answer: "2", isCorrected: true },
                            { answer: "3" }
                        ]
                    },
                    {
                        content: "Công thức tính diện tích hình tròn là gì?",
                        answers: [
                            { answer: "π × bán kính", isCorrected: true },
                            { answer: "π × bán kính × chu vi" },
                            { answer: "π × chu vi" },
                            { answer: "π × đường kính" }
                        ]
                    }
                ]
            },
            {
                id: 10,
                image: "../assets/images/Image.png",
                testName: "Quiz về Hóa học",
                categoryId: "Hóa học",
                emoji: "👻",
                playTime: 25,
                playAmount: 38,
                questions: [
                    {
                        content: "Kết quả của phép toán 2 + 2 là bao nhiêu?",
                        answers: [
                            { answer: "3" },
                            { answer: "4", isCorrected: true },
                            { answer: "5" },
                            { answer: "6" }
                        ]
                    },
                    {
                        content: "Số Pi (π) có giá trị xấp xỉ là bao nhiêu?",
                        answers: [
                            { answer: "3.14159", isCorrected: true },
                            { answer: "3.14" },
                            { answer: "3.0" },
                            { answer: "4.0" }
                        ]
                    },
                    {
                        content: "Phương trình x² - 4 = 0 có nghiệm là gì?",
                        answers: [
                            { answer: "x = 2; x = -2", isCorrected: true },
                            { answer: "x = 4; x = -4" },
                            { answer: "x = 0; x = 4" },
                            { answer: "x = 1; x = -1" }
                        ]
                    },
                    {
                        content: "Góc nhọn có giá trị bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "Dưới 90 độ", isCorrected: true },
                            { answer: "Trên 90 độ" },
                            { answer: "Bằng 180 độ" }
                        ]
                    },
                    {
                        content: "Định lý Pythagoras áp dụng cho tam giác nào?",
                        answers: [
                            { answer: "Tam giác đều" },
                            { answer: "Tam giác vuông", isCorrected: true },
                            { answer: "Tam giác cân" },
                            { answer: "Tam giác tù" }
                        ]
                    },
                    {
                        content: "Tổng của các góc trong một tam giác là bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "180 độ", isCorrected: true },
                            { answer: "360 độ" },
                            { answer: "270 độ" }
                        ]
                    },
                    {
                        content: "Số nào là số nguyên tố đầu tiên?",
                        answers: [
                            { answer: "0" },
                            { answer: "1" },
                            { answer: "2", isCorrected: true },
                            { answer: "3" }
                        ]
                    },
                    {
                        content: "Công thức tính diện tích hình tròn là gì?",
                        answers: [
                            { answer: "π × bán kính", isCorrected: true },
                            { answer: "π × bán kính × chu vi" },
                            { answer: "π × chu vi" },
                            { answer: "π × đường kính" }
                        ]
                    }
                ]
            },
            {
                id: 12,
                image: "../assets/images/Image.png",
                testName: "Quiz về Địa lí",
                categoryId: "Địa lí",
                emoji: "🇻🇳",
                playTime: 25,
                playAmount: 38,
                questions: [
                    {
                        content: "Kết quả của phép toán 2 + 2 là bao nhiêu?",
                        answers: [
                            { answer: "3" },
                            { answer: "4", isCorrected: true },
                            { answer: "5" },
                            { answer: "6" }
                        ]
                    },
                    {
                        content: "Số Pi (π) có giá trị xấp xỉ là bao nhiêu?",
                        answers: [
                            { answer: "3.14159", isCorrected: true },
                            { answer: "3.14" },
                            { answer: "3.0" },
                            { answer: "4.0" }
                        ]
                    },
                    {
                        content: "Phương trình x² - 4 = 0 có nghiệm là gì?",
                        answers: [
                            { answer: "x = 2; x = -2", isCorrected: true },
                            { answer: "x = 4; x = -4" },
                            { answer: "x = 0; x = 4" },
                            { answer: "x = 1; x = -1" }
                        ]
                    },
                    {
                        content: "Góc nhọn có giá trị bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "Dưới 90 độ", isCorrected: true },
                            { answer: "Trên 90 độ" },
                            { answer: "Bằng 180 độ" }
                        ]
                    },
                    {
                        content: "Định lý Pythagoras áp dụng cho tam giác nào?",
                        answers: [
                            { answer: "Tam giác đều" },
                            { answer: "Tam giác vuông", isCorrected: true },
                            { answer: "Tam giác cân" },
                            { answer: "Tam giác tù" }
                        ]
                    },
                    {
                        content: "Tổng của các góc trong một tam giác là bao nhiêu độ?",
                        answers: [
                            { answer: "90 độ" },
                            { answer: "180 độ", isCorrected: true },
                            { answer: "360 độ" },
                            { answer: "270 độ" }
                        ]
                    },
                    {
                        content: "Số nào là số nguyên tố đầu tiên?",
                        answers: [
                            { answer: "0" },
                            { answer: "1" },
                            { answer: "2", isCorrected: true },
                            { answer: "3" }
                        ]
                    },
                    {
                        content: "Công thức tính diện tích hình tròn là gì?",
                        answers: [
                            { answer: "π × bán kính", isCorrected: true },
                            { answer: "π × bán kính × chu vi" },
                            { answer: "π × chu vi" },
                            { answer: "π × đường kính" }
                        ]
                    }
                ]
            },
        ];
        saveToLocalStorage();
    }
    displayTests = [...tests];
}
function saveToLocalStorage(){
    localStorage.setItem("tests", JSON.stringify(tests));
}
function renderQuizzes(quizList){
    let container = document.getElementById("quiz-container");
    container.innerHTML = "";
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let pageQuizzes = quizList.slice(start, end);
    for(let i = 0; i < pageQuizzes.length; i += 2){
        let quizGroup = document.createElement("div");
        quizGroup.className = "quiz-list";
        for(let j = i; j < i + 2 && j < pageQuizzes.length; j++){
            let quiz = pageQuizzes[j];
            quizGroup.innerHTML += `
                <div class="quiz-item">
                    <img src="${quiz.image}" alt="${quiz.categoryId}">
                    <div class="quiz-info">
                        <p>${quiz.emoji} ${quiz.categoryId}</p>
                        <h3>${quiz.testName}</h3>
                        <p>${quiz.questions.length} câu hỏi - ${quiz.playAmount} lượt chơi</p>
                        <button>Chơi</button>
                    </div>
                </div>
            `;
        }
        container.appendChild(quizGroup);
    }
}
function renderPagination(){
    let paginationContainer = document.querySelector(".page-numbers");
    let prevButton = document.querySelector(".page-prev");
    let nextButton = document.querySelector(".page-next");
    paginationContainer.innerHTML = "";
    let totalPages = Math.ceil(currentQuizList.length / itemsPerPage);
    for(let i = 1; i <= totalPages; i++){
        let pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = "btn btn-link page-number";
        if(i === currentPage){
            pageButton.classList.add("active");
        }
        pageButton.addEventListener("click", () =>{
            currentPage = i;
            renderQuizzes(currentQuizList);
            renderPagination();
        });
        paginationContainer.appendChild(pageButton);
    }
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    prevButton.classList.toggle("disabled", currentPage === 1);
    nextButton.classList.toggle("disabled", currentPage === totalPages);
    prevButton.removeEventListener("click", handlePrevClick);
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.removeEventListener("click", handleNextClick);
    nextButton.addEventListener("click", handleNextClick);
}
function handlePrevClick(){
    if(currentPage > 1){
        currentPage--;
        renderQuizzes(currentQuizList);
        renderPagination();
    }
}
function handleNextClick(){
    let totalPages = Math.ceil(currentQuizList.length / itemsPerPage);
    if(currentPage < totalPages){
        currentPage++;
        renderQuizzes(currentQuizList);
        renderPagination();
    }
}
function sortQuizzes(order){
    currentQuizList = [...tests].sort((a, b) =>
        order === "asc" ? a.playAmount - b.playAmount : b.playAmount - a.playAmount
    );
    currentPage = 1;
    renderQuizzes(currentQuizList);
    renderPagination();
}
document.querySelectorAll(".sort-btn").forEach(button =>{
    button.addEventListener("click", () =>{
        sortQuizzes(button.dataset.sort);
    });
});
window.addEventListener("storage", (event) =>{
    if(event.key === "tests"){
        tests = JSON.parse(localStorage.getItem("tests")) || [];
        renderQuizzes(tests);
        renderPagination();
    }
});
window.addEventListener("load", () =>{
    loadTestsFromLocalStorage();
    currentQuizList = [...tests];
    renderQuizzes(currentQuizList);
    renderPagination();
});