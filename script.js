// さくらの花びらを降らせる
function createFallingCherry() {
    const cherryContainer = document.getElementById('cherryContainer');
    const cherries = ['🌸', '🍒', '💕'];
    
    setInterval(() => {
        const cherry = document.createElement('div');
        cherry.className = 'falling-cherry';
        cherry.textContent = cherries[Math.floor(Math.random() * cherries.length)];
        cherry.style.left = Math.random() * 100 + '%';
        cherry.style.animationDuration = (Math.random() * 3 + 5) + 's';
        cherry.style.fontSize = (Math.random() * 10 + 15) + 'px';
        
        cherryContainer.appendChild(cherry);
        
        setTimeout(() => {
            cherry.remove();
        }, 8000);
    }, 800);
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のアニメーション
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.profile-card, .gallery-item, .schedule-item, .fanclub-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// 浮遊するさくらんぼのクリックイベント
document.getElementById('floatingCherry').addEventListener('click', function() {
    createBurstEffect(this);
    playSound();
    showMessage();
});

// バースト効果
function createBurstEffect(element) {
    const emojis = ['💕', '💖', '💗', '💝', '🌸', '🍒'];
    
    for (let i = 0; i < 12; i++) {
        const burst = document.createElement('div');
        burst.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        burst.style.position = 'fixed';
        burst.style.left = element.offsetLeft + 'px';
        burst.style.bottom = '30px';
        burst.style.fontSize = '30px';
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '9999';
        
        const angle = (i * 30) * Math.PI / 180;
        const velocity = 150;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(burst);
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += vx * 0.02;
            y += vy * 0.02;
            y -= 2;
            opacity -= 0.02;
            
            burst.style.transform = `translate(${x}px, ${-y}px)`;
            burst.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                burst.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// サウンド効果（実際の音声ファイルは必要に応じて追加）
function playSound() {
    // 音声ファイルがある場合はここで再生
    console.log('🎵 キラキラ音が鳴ります！');
}

// メッセージ表示
function showMessage() {
    const messages = [
        '桜だよ〜！💕',
        'みんな大好き！🌸',
        'いつもありがとう！',
        '愛媛最高〜！🍊',
        'さくらんぼ〜🍒',
        'キラキラ〜✨',
        'ファイト〜！💪',
        'スマイル😊'
    ];
    
    const message = document.createElement('div');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.style.position = 'fixed';
    message.style.bottom = '100px';
    message.style.right = '30px';
    message.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
    message.style.color = 'white';
    message.style.padding = '15px 25px';
    message.style.borderRadius = '30px';
    message.style.fontSize = '18px';
    message.style.fontWeight = 'bold';
    message.style.boxShadow = '0 5px 20px rgba(255, 105, 180, 0.5)';
    message.style.zIndex = '9999';
    message.style.animation = 'slideInRight 0.5s ease-out';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 2000);
}

// ボタンのホバー効果
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        createSparkle(this);
    });
});

// キラキラ効果
function createSparkle(element) {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '20px';
    sparkle.style.animation = 'sparkle 1s ease-out';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (Math.random() * rect.width) + 'px';
    sparkle.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// アニメーション用のCSS追加
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// タイトルのアニメーション
function animateTitle() {
    const title = document.querySelector('.hero-title span');
    if (title) {
        setInterval(() => {
            title.style.transform = 'scale(1.1)';
            setTimeout(() => {
                title.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
}

// ギャラリーのホバー効果強化
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = `translateY(-10px) rotate(${index % 2 === 0 ? -2 : 2}deg)`;
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ファンクラブボタンの特別な効果
const fanButton = document.querySelector('.btn-join');
if (fanButton) {
    let isAnimating = false;
    
    fanButton.addEventListener('click', function(e) {
        if (!isAnimating) {
            isAnimating = true;
            
            // ハートの爆発
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('span');
                    heart.textContent = '💕';
                    heart.style.position = 'fixed';
                    heart.style.left = e.clientX + 'px';
                    heart.style.top = e.clientY + 'px';
                    heart.style.fontSize = '30px';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '10000';
                    
                    const angle = (Math.random() * 360) * Math.PI / 180;
                    const velocity = Math.random() * 200 + 100;
                    const vx = Math.cos(angle) * velocity;
                    const vy = Math.sin(angle) * velocity;
                    
                    document.body.appendChild(heart);
                    
                    let x = 0;
                    let y = 0;
                    let opacity = 1;
                    let scale = 1;
                    
                    const animateHeart = () => {
                        x += vx * 0.02;
                        y += vy * 0.02;
                        y += 2;
                        opacity -= 0.015;
                        scale += 0.01;
                        
                        heart.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
                        heart.style.opacity = opacity;
                        
                        if (opacity > 0) {
                            requestAnimationFrame(animateHeart);
                        } else {
                            heart.remove();
                        }
                    };
                    
                    requestAnimationFrame(animateHeart);
                }, i * 50);
            }
            
            setTimeout(() => {
                isAnimating = false;
            }, 1500);
        }
    });
}

// ナビゲーションのアクティブ状態
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '#ff69b4';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = '#ff1493';
                link.style.fontWeight = '900';
            }
        });
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    createFallingCherry();
    handleScrollAnimation();
    animateTitle();
    updateActiveNav();
    
    // ローディングアニメーション
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = '1';
    }, 100);
    
    // ウェルカムメッセージ
    setTimeout(() => {
        showMessage();
    }, 2000);
});

// マウスカーソルにキラキラをつける（オプション）
let mouseTimer;
document.addEventListener('mousemove', (e) => {
    clearTimeout(mouseTimer);
    mouseTimer = setTimeout(() => {
        if (Math.random() > 0.95) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.fontSize = '15px';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkle 0.5s ease-out';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 500);
        }
    }, 100);
});