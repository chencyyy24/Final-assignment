/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Dark Mode Logic ---
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 检查 LocalStorage 中是否已保存偏好
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Light';
    } else {
        toggleBtn.textContent = '🌙 Dark';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // 更新按钮文字并保存到 LocalStorage
        if (body.classList.contains('dark-mode')) {
            toggleBtn.textContent = '☀️ Light';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙 Dark';
            localStorage.setItem('theme', 'light');
        }
    });

    // --- 2. Mobile Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 3. Simple Form Validation (仅在 Contact 页面生效) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (!name || !email) {
                e.preventDefault(); // 阻止提交
                alert('Please fill in all required fields.');
            } else {
                // 实际项目中这里会发送数据
                alert('Message sent successfully!');
            }
        });
    }
});

/* contact部分的css开始*/

/* script.js - 更新 Contact Form 部分 */

// ... (之前的 Dark Mode 和 Mobile Menu 代码保持不变) ...

    // --- 3. Enhanced Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止默认提交

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const btn = contactForm.querySelector('button');

            // 简单验证
            if (!name.value || !email.value || !message.value) {
                statusMsg.style.display = 'block';
                statusMsg.style.color = 'red';
                statusMsg.textContent = 'Please fill in all required fields marked with *.';
                return;
            }

            // 模拟发送过程 (Loading State)
            const originalBtnText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                // 模拟成功
                statusMsg.style.display = 'block';
                statusMsg.style.color = 'green';
                statusMsg.textContent = `Thank you, ${name.value}. We have received your message.`;
                
                // 重置表单
                contactForm.reset();
                
                // 恢复按钮
                btn.textContent = originalBtnText;
                btn.disabled = false;
                btn.style.opacity = '1';
                
                // 3秒后清除成功消息
                setTimeout(() => {
                    statusMsg.style.display = 'none';
                }, 5000);

            }, 1500); // 1.5秒延迟模拟网络请求
        });
    }
    
    /* script.js */

// 1. 定义翻译字典 (The Dictionary)
const translations = {
    en: {
        // --- Navigation (Global) ---
        nav_home: "Home",
        nav_products: "Products ▾",
        nav_about: "About",
        nav_contact: "Contact",
        footer_copyright: "© 2025 Corp Inc. All rights reserved.",
        btn_start_trial: "Start Your Trial",

        // --- Index Page ---
        hero_title: "Boundless Vision.",
        hero_subtitle: "Minimalist solutions for seamless viewing. Choose your perfect tier.",
        tier_air_title: "Air",
        tier_air_desc: "Essential & Fast. Experience the lightest cloud-based streaming.",
        tier_vision_title: "Vision",
        tier_vision_desc: "Standard & Immersive. Everything you need for a complete experience.",
        tier_max_title: "Max",
        tier_max_desc: "Premium. The ultimate luxury in cinematic service.",
        features_title: "The Architecture of Elegance",
        features_subtitle: "Seamless experience in every frame.",
        feature_zero_latency_title: "Zero Latency",
        feature_zero_latency_desc: "Our global edge network ensures your streaming travels the shortest distance possible.",
        feature_military_grade_title: "Data Privacy",
        feature_military_grade_desc: "End-to-end encryption, ensuring a private and secure viewing space for everyone.",
        feature_fluid_scaling_title: "Vast Library",
        feature_fluid_scaling_desc: "Millions of licensed titles worldwide, ready whenever you are.",
        quote_max_tier: "\"Before Corp, we were overwhelmed by fragmented content. The 'Max' tier didn't just provide movies; it redefined our entire entertainment lifestyle.\"",
        quote_max_tier_cite: "— Alex V., CTO of FinTech Global",
        cta_ready_to_evolve: "Ready to Evolve?",
        cta_join_companies: "Join 500+ forward-thinking partners building the future of media.",

        // --- About Page (NEW) ---
        about_hero_title: "We Are Corp.",
        about_hero_desc: "Bringing together global cinema across cultures and borders. With a single click, immerse yourself in an infinite forest of stories and open your private vision.",
        about_mission_title: "Our Mission",
        about_mission_desc_1: "Since 2025, we have dedicated ourselves to one goal: letting great stories resonate. In a world of noise, Corp filters the clutter to present pure visual art. We build cutting-edge streaming tech to ensure art transcends screens, not restricted by it.",
        about_mission_desc_2: "Whether it's the lightness of Air, the clarity of Vision, or the luxury of Max, our ecosystem is designed to adapt to your life, making every moment a joy.",
        stat_clients: "Enterprise Clients",
        stat_offices: "Global Offices",
        stat_uptime: "Uptime Guaranteed",
        stat_support: "Dedicated Support",
        team_title: "The Leadership",
        team_subtitle: "The brilliant minds behind the machinery.",
        role_ceo: "Chief Executive Officer",
        role_cto: "CTO & Architect",
        role_product: "Head of Product",
        role_design: "Design Director",

        // --- Contact Page (NEW) ---
        contact_hero_title: "Get in Touch",
        contact_hero_desc: "Start a conversation. We are ready to listen.",
        contact_form_title: "Send a Message",
        // Form Labels
        contact_form_name: "Full Name *",
        contact_form_email: "Work Email *",
        contact_form_department: "Department",
        contact_form_message: "How can we help? *",
        contact_form_send: "Send Message",
        // Form Placeholders (Input attributes)
        placeholder_name: "Jane Doe",
        placeholder_email: "jane@company.com",
        placeholder_msg: "Tell us about your project needs...",
        // Form Select Options
        contact_form_department_sales: "Sales & Partnerships",
        contact_form_department_support: "Technical Support",
        contact_form_department_press: "Media & Press",
        contact_form_department_other: "General Inquiry",
        // Contact Info Side
        contact_direct_channels: "Direct Channels",
        contact_email_us: "Email Us",
        contact_hq_title: "Headquarters",
        contact_hours: "Mon-Fri, 9am - 6pm PST",
        // FAQ
        faq_title: "Frequently Asked Questions",
        faq_q1: "What is the typical response time?",
        faq_a1: "For Max members, we respond within 1 hour. For Standard inquiries, please allow up to 24 hours via email.",
        faq_q2: "Do you offer custom enterprise plans?",
        faq_a2: "Yes. Select \"Sales & Partnerships\" in the form above, and our dedicated team will design a custom solution for your infrastructure.",
        faq_q3: "Can I switch between Air, Vision, and Max?",
        faq_a3: "Absolutely. Our ecosystem is fluid. You can upgrade or downgrade your tier at the start of any billing cycle directly from your dashboard."
    },
    zh: {
        // --- 导航 (全局) ---
        nav_home: "首页",
        nav_products: "产品服务 ▾",
        nav_about: "关于我们",
        nav_contact: "联系方式",
        footer_copyright: "© 2025 Corp Inc. 保留所有权利。",
        btn_start_trial: "开始您的试用",

        // --- 首页 ---
        hero_title: "视界无界。",
        hero_subtitle: "化繁为简的解决方案。选择您最满意的观影平台。",
        tier_air_title: "Air",
        tier_air_desc: "极速基础版。给您最轻盈的云端体验。",
        tier_vision_title: "Vision",
        tier_vision_desc: "标准普通版。给您最满足的体验",
        tier_max_title: "Max",
        tier_max_desc: "尊享版。极致的服务体验。",
        features_title: "轻盈的设计理念",
        features_subtitle: "流畅的体验。",
        feature_zero_latency_title: "零延迟",
        feature_zero_latency_desc: "我们的全球边缘网络确保您的数据以最短距离传输。",
        feature_military_grade_title: "数据安全",
        feature_military_grade_desc: "端到端加密，每个人享受独立的数据。",
        feature_fluid_scaling_title: "充足的影片资源",
        feature_fluid_scaling_desc: "全网千万版权影片，想看就看。",
        quote_max_tier: "“在使用 Corp 之前，我们深陷技术债务。'Max' 层不仅解决了我们的问题；它重新定义了我们的工作流程。”",
        quote_max_tier_cite: "—— Alex V., FinTech Global 首席技术官",
        cta_ready_to_evolve: "准备好进化了吗？",
        cta_join_companies: "加入 500 多家前瞻性公司，共同构建未来。",

        // --- 关于我们 (新增) ---
        about_hero_title: "我们是 Corp。",
        about_hero_desc: "汇聚全球优质光影，跨越文化与地域的界限。只需轻轻一点，即可随时随地沉浸于无限精彩的故事森林，开启您的专属私人视界。",
        about_mission_title: "我们的使命",
        about_mission_desc_1: "自 2025 年以来，我们致力于一个目标：让好故事产生共鸣。 在充斥杂讯的世界里，Corp 过滤掉繁琐与干扰，只为您呈现最纯粹的视觉艺术。我们构建极致的流媒体技术，确保艺术创作能跨越终端，而非被技术所限。",
        about_mission_desc_2: "无论是 Air 的极简轻盈、Vision 的沉浸清晰，还是 Max 的影院级奢华，我们的生态系统旨在让影像主动贴合您的生活，让每一刻观影都成为一种享受。",
        stat_clients: "企业客户",
        stat_offices: "全球办事处",
        stat_uptime: "正常运行时间保证",
        stat_support: "专属支持",
        team_title: "领导团队",
        team_subtitle: "机器背后的智慧大脑。",
        role_ceo: "首席执行官",
        role_cto: "首席技术官 & 架构师",
        role_product: "产品负责人",
        role_design: "设计总监",

        // --- 联系我们 (新增) ---
        contact_hero_title: "联系我们",
        contact_hero_desc: "开启对话。我们随时倾听。",
        contact_form_title: "发送消息",
        // 表单标签
        label_name: "全名 *",
        label_email: "工作邮箱 *",
        label_dept: "部门",
        label_msg: "我们要如何提供帮助？ *",
        btn_send: "发送消息",
        // 表单占位符
        placeholder_name: "张三",
        placeholder_email: "zhangsan@company.com",
        placeholder_msg: "请告诉我们您的项目需求...",
        // 下拉菜单
        contact_form_department_sales: "销售与合作",
        contact_form_department_support: "技术支持",
        contact_form_department_press: "媒体与新闻",
        contact_form_department_other: "一般咨询",
        // 联系信息栏
        contact_direct_channels: "直通渠道",
        contact_email_us: "邮件联系",
        contact_hq_title: "总部",
        contact_hours: "周一至周五, 上午9点 - 下午6点 PST",
        // FAQ
        faq_title: "常见问题",
        faq_q1: "通常响应时间是多少？",
        faq_a1: "对于Max会员，我们在 1 小时内响应。对于标准咨询，请允许通过电子邮件最多 24 小时回复。",
        faq_q2: "你们提供定制的企业方案吗？",
        faq_a2: "是的。请在上方表格中选择“销售与合作”，我们的专属企业团队将为您的基础设施设计定制方案。",
        faq_q3: "我可以在 Air、Vision 和 Max 之间切换吗？",
        faq_a3: "当然。我们的生态系统是流动的。您可以随时在计费周期开始时直接从仪表板升级或降级您的层级。"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Toggle Logic ---
    const langBtn = document.getElementById('lang-toggle');
    
    // 1. 获取用户存储的语言，如果没有则默认为英文 'en'
    let currentLang = localStorage.getItem('lang') || 'en';

    // 2. 初始化页面语言
    updateLanguage(currentLang);

    // 3. 点击事件
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            // 切换语言
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            // 更新页面
            updateLanguage(currentLang);
            // 保存设置
            localStorage.setItem('lang', currentLang);
        });
    }

    // --- 核心翻译函数 ---
    function updateLanguage(lang) {
        // 1. 遍历所有带有 data-i18n 属性的元素
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            // 检查字典中是否有对应的翻译
            if (translations[lang] && translations[lang][key]) {
                // 如果是 input 的 placeholder (比如搜索框)
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    // 普通文本
                    el.textContent = translations[lang][key];
                }
            }
        });

        // 2. 更新按钮文字
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? '中文' : 'English';
        }
        
        // 3. (可选) 给 Body 加个 class 方便针对中文做特殊样式
        if(lang === 'zh') {
            document.body.classList.add('lang-zh');
        } else {
            document.body.classList.remove('lang-zh');
        }
    }

    // ... (保留之前的 Dark Mode 和 Menu 代码) ...
    // --- Dark Mode Logic ---
    // ...
});
function updateLanguage(lang) {
    // 1. 遍历所有带有 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // 检查字典中是否有对应的翻译
        if (translations[lang] && translations[lang][key]) {
            // 如果是 input 的 placeholder (比如搜索框)
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                // 普通文本 - 使用 innerHTML 以支持 <strong> 等标签
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // 2. 更新按钮文字
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'CN / EN' : 'English'; // 稍微优化了按钮文字逻辑
    }
    
    // 3. 给 Body 加 class
    if(lang === 'zh') {
        document.body.classList.add('lang-zh');
    } else {
        document.body.classList.remove('lang-zh');
    }
}