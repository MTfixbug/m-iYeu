document.addEventListener('DOMContentLoaded', function() {
    // Lấy các element cần thiết
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionContainer = document.querySelector('.question-container');
    const successMessage = document.getElementById('success-message');
    
    // Mảng chứa các câu trả lời hài hước cho nút "Không"
    const noMessages = [
        "Nghĩ lại đi mà 🥺",
        "Chắc không dọ? 😏", 
        "Pleaseeeeee 🥹",
        "Không được chọn cái này! 😤",
        "Mình sẽ buồn lắm đó... 😢",
        "Đừng mà! 😭",
        "Hãy suy nghĩ kỹ đi! 🤔",
        "Tui sẽ khóc đó! 😿",
        "Một cơ hội nữa thôi! 🙏",
        "Em nghiêm túc không? 😯",
        "Huhu đừng vậy mà! 😪",
        "Tui biết em thích tui mà! 😎",
        "Thôi đừng nghịch nữa! 🤨",
        "Bấm CÓ đi mà! 😆",
        "Ơ hay, bấm nhầm rồi! 🙃",
        "Thử lại đi nào! 😊",
        "Đùa à? 🤪",
        "Nói thật đi! 😌",
        "Không tin! 😏"
    ];
    
    let noClickCount = 0;
    let yesBtnScale = 1; // Để track kích thước của nút "Có"
    
    // Debug: theo dõi nút "Không"
    console.log('No button found:', noBtn);
    console.log('Initial position:', noBtn.style.position || 'default');
    
    // Thêm sự kiện cho nút "Không" - sử dụng click thay vì mouseover
    noBtn.addEventListener('click', function() {
        // Approach đơn giản: di chuyển nút trong container với vị trí cố định
        const container = document.querySelector('.container');
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        // Tạo các vị trí an toàn trong container
        const safePositions = [
            { left: 50, top: 100 },
            { left: containerWidth - 200, top: 100 },
            { left: 50, top: 200 },
            { left: containerWidth - 200, top: 200 },
            { left: 150, top: 150 },
            { left: containerWidth - 300, top: 300 },
            { left: 100, top: 350 },
            { left: containerWidth - 250, top: 150 },
            { left: 200, top: 250 }
        ];
        
        // Chọn vị trí ngẫu nhiên từ danh sách an toàn
        const randomPos = safePositions[Math.floor(Math.random() * safePositions.length)];
        
        console.log('Container size:', containerWidth, containerHeight);
        console.log('Moving to safe position:', randomPos);
        
        // Di chuyển nút đến vị trí mới
        noBtn.style.position = 'absolute';
        noBtn.style.right = 'auto';
        noBtn.style.left = randomPos.left + 'px';
        noBtn.style.top = randomPos.top + 'px';
        noBtn.style.zIndex = '200';
        noBtn.style.transform = `rotate(${Math.random() * 15 - 7.5}deg)`;
        noBtn.style.transition = 'all 0.3s ease-out';
        
        // Đảm bảo nút luôn hiển thị
        noBtn.style.display = 'flex';
        noBtn.style.visibility = 'visible';
        noBtn.style.opacity = '1';
        
        // Chọn ngẫu nhiên một câu từ mảng và cập nhật nội dung
        const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
        noBtn.querySelector('.btn-text').innerText = randomMessage;
        
        // Thay đổi emoji ngẫu nhiên
        const emojis = ['😅', '😰', '🏃‍♂️', '😵', '🤪', '😖', '🤯', '😱', '🙈', '😭', '🤭', '😬'];
        noBtn.querySelector('.btn-emoji').innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Đảm bảo nút luôn hiển thị
        noBtn.style.visibility = 'visible';
        noBtn.style.opacity = '1';
        
        // Tăng kích thước nút "Có" một tí mỗi lần click "Không"
        yesBtnScale += 0.08; // Tăng 8% mỗi lần để dễ thấy hơn
        yesBtn.style.transform = `scale(${yesBtnScale})`;
        yesBtn.style.transition = 'transform 0.4s ease';
        
        // Thêm hiệu ứng màu sắc cho nút "Có"
        if (noClickCount % 3 === 0) {
            yesBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        } else if (noClickCount % 3 === 1) {
            yesBtn.style.background = 'linear-gradient(45deg, #ff9ff3, #54a0ff)';
        } else {
            yesBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a6f)';
        }
        
        noClickCount++;
        
        // Thêm hiệu ứng shake cho toàn trang khi click nhiều lần - nhẹ nhàng hơn
        if (noClickCount > 8) { // Tăng threshold để ít khi rung toàn trang
            document.body.style.animation = 'shakeScreen 0.3s ease-in-out'; // Giảm thời gian
            setTimeout(() => {
                document.body.style.animation = '';
            }, 300);
        }
        
        // Thêm hiệu ứng shake nhẹ hơn cho container
        containerElem.style.animation = 'shakeHard 0.4s ease-in-out'; // Giảm thời gian
        setTimeout(() => {
            containerElem.style.animation = '';
        }, 400);
        
        // Thêm hiệu ứng flash cho nút "Có" với màu thay đổi
        const flashColors = ['rgba(255, 107, 107, 0.8)', 'rgba(76, 201, 196, 0.8)', 'rgba(255, 159, 243, 0.8)'];
        const flashColor = flashColors[noClickCount % flashColors.length];
        yesBtn.style.boxShadow = `0 0 40px ${flashColor}`;
        setTimeout(() => {
            yesBtn.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
        }, 400);
    });
    
    // Thêm sự kiện cho nút "Có" - sử dụng click
    yesBtn.addEventListener('click', function() {
        // Thêm hiệu ứng click
        yesBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 150);
        
        // Delay để hiệu ứng diễn ra
        setTimeout(() => {
            // Ẩn question-container và hiện success-message
            questionContainer.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Tạo hiệu ứng pháo hoa
            createFireworks();
            
            // Tạo hiệu ứng trái tim bay
            createFloatingHearts();
            
            // Thay đổi background
            document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #a8edea 100%)';
        }, 300);
    });
    
    // Hàm tạo hiệu ứng pháo hoa
    function createFireworks() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.style.position = 'fixed';
                firework.style.width = '6px';
                firework.style.height = '6px';
                firework.style.borderRadius = '50%';
                firework.style.left = Math.random() * window.innerWidth + 'px';
                firework.style.top = Math.random() * window.innerHeight + 'px';
                firework.style.zIndex = '9999';
                firework.style.pointerEvents = 'none';
                
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                firework.style.animation = 'fireworkExplode 1s ease-out forwards';
                
                document.body.appendChild(firework);
                
                setTimeout(() => {
                    if (firework.parentNode) {
                        firework.parentNode.removeChild(firework);
                    }
                }, 1000);
            }, i * 50);
        }
    }
    
    // Hàm tạo trái tim bay
    function createFloatingHearts() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                const heartEmojis = ['💕', '💖', '💗', '💘', '💝', '💓', '❤️', '🧡', '💛', '💚', '💙', '💜'];
                heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = window.innerHeight + 'px';
                heart.style.fontSize = Math.random() * 30 + 20 + 'px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9998';
                heart.style.animation = 'heartFloat 4s ease-out forwards';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 4000);
            }, i * 100);
        }
    }
    
    // Thêm CSS animations động
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes shakeScreen {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-1px, -0.5px) rotate(-0.2deg); }
            20% { transform: translate(0.5px, 0.5px) rotate(0.2deg); }
            30% { transform: translate(-0.5px, 0.5px) rotate(-0.1deg); }
            40% { transform: translate(1px, -0.5px) rotate(0.1deg); }
            50% { transform: translate(-0.5px, 0.5px) rotate(-0.1deg); }
            60% { transform: translate(0.5px, -0.5px) rotate(0.1deg); }
            70% { transform: translate(-0.5px, 0.5px) rotate(-0.05deg); }
            80% { transform: translate(0.5px, -0.5px) rotate(0.05deg); }
            90% { transform: translate(-0.5px, 0px) rotate(-0.02deg); }
        }
        
        @keyframes shakeHard {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            10% { transform: translate(-3px, -2px) rotate(-0.5deg); }
            20% { transform: translate(2px, 1px) rotate(0.3deg); }
            30% { transform: translate(-3px, 1px) rotate(-0.3deg); }
            40% { transform: translate(2px, -2px) rotate(0.5deg); }
            50% { transform: translate(-2px, 2px) rotate(-0.5deg); }
            60% { transform: translate(3px, -1px) rotate(0.3deg); }
            70% { transform: translate(-2px, 2px) rotate(-0.3deg); }
            80% { transform: translate(2px, -2px) rotate(0.5deg); }
            90% { transform: translate(-1px, 1px) rotate(-0.2deg); }
        }
        
        @keyframes fireworkExplode {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.8;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
        
        @keyframes heartFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(dynamicStyles);
    
    // Thêm hiệu ứng cursor cho nút "Không"
    noBtn.addEventListener('mouseenter', function() {
        document.body.style.cursor = 'not-allowed';
        // Thêm hiệu ứng chạy trốn khi hover - chỉ thay đổi màu sắc
        noBtn.style.boxShadow = '0 0 25px rgba(116, 185, 255, 0.9)';
        noBtn.style.filter = 'brightness(1.1)';
    });
    
    noBtn.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'default';
        // Trở lại bình thường khi không hover
        noBtn.style.boxShadow = '0 8px 25px rgba(116, 185, 255, 0.4)';
        noBtn.style.filter = 'brightness(1)';
    });
    
    // Thêm hiệu ứng hover cho container
    const container = document.querySelector('.container');
    container.addEventListener('mouseenter', function() {
        container.style.transform = 'scale(1.02)';
    });
    
    container.addEventListener('mouseleave', function() {
        container.style.transform = 'scale(1)';
    });
});
