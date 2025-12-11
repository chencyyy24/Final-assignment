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
        hero_title: "Experience the Future.",
        hero_subtitle: "Minimalist solutions for complex problems. Choose your tier.",
        tier_air_title: "Air",
        tier_air_desc: "Essential & Fast. Light as a feather, powered by cloud.",
        tier_vision_title: "Vision",
        tier_vision_desc: "Data & Visuals. See what others miss with AI analytics.",
        tier_max_title: "Max",
        tier_max_desc: "Concierge Service. The ultimate premium experience.",
        features_title: "The Architecture of Speed",
        features_subtitle: "Built on principles, not just code.",
        feature_zero_latency_title: "Zero Latency",
        feature_zero_latency_desc: "Our global edge network ensures your data travels the shortest distance possible.",
        feature_military_grade_title: "Military-Grade",
        feature_military_grade_desc: "End-to-end encryption compliant with SOC2 and GDPR standards.",
        feature_fluid_scaling_title: "Fluid Scaling",
        feature_fluid_scaling_desc: "From 10 to 10 million requests. The infrastructure breathes with your traffic.",
        quote_max_tier: "\"Before Corp, we were drowning in technical debt. The 'Max' tier didn't just solve our problems; it reinvented our workflow.\"",
        quote_max_tier_cite: "— Alex V., CTO of FinTech Global",
        cta_ready_to_evolve: "Ready to Evolve?",
        cta_join_companies: "Join 500+ forward-thinking companies building the future.",

        // --- About Page (NEW) ---
        about_hero_title: "We Are Corp.",
        about_hero_desc: "Bridging the gap between complex technology and human simplicity. Founded on the belief that software should be invisible.",
        about_mission_title: "Our Mission",
        about_mission_desc_1: "Since 2025, we have dedicated ourselves to one goal: removing friction. In a world of noise, Corp provides the signal. We build tools that empower businesses to scale without the technical debt.",
        about_mission_desc_2: "Whether it's the lightness of <strong>Air</strong>, the clarity of <strong>Vision</strong>, or the luxury of <strong>Max</strong>, our ecosystem is designed to adapt to you, not the other way around.",
        stat_clients: "Enterprise Clients",
        stat_offices: "Global Offices",
        stat_uptime: "Uptime Guaranteed",
        stat_support: "Dedicated Support",
        team_title: "The Leadership",
        team_subtitle: "The minds behind the machinery.",
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
        faq_a1: "For <strong>Max</strong> members, we respond within 1 hour. For Standard inquiries, please allow up to 24 hours via email.",
        faq_q2: "Do you offer custom enterprise plans?",
        faq_a2: "Yes. Select \"Sales & Partnerships\" in the form above, and our dedicated enterprise team will design a custom solution for your infrastructure.",
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
        hero_title: "体验未来。",
        hero_subtitle: "化繁为简的解决方案。选择您的层级。",
        tier_air_title: "Air",
        tier_air_desc: "极速基础版。轻如羽毛，云端驱动。",
        tier_vision_title: "Vision",
        tier_vision_desc: "数据视觉版。AI 分析，洞察秋毫。",
        tier_max_title: "Max",
        tier_max_desc: "尊享版。极致的管家式服务体验。",
        features_title: "速度的架构",
        features_subtitle: "基于原则，而非代码构建。",
        feature_zero_latency_title: "零延迟",
        feature_zero_latency_desc: "我们的全球边缘网络确保您的数据以最短距离传输。",
        feature_military_grade_title: "军用级别",
        feature_military_grade_desc: "端到端加密，符合 SOC2 和 GDPR 标准。",
        feature_fluid_scaling_title: "流体扩展",
        feature_fluid_scaling_desc: "从 10 到 1000 万请求。基础设施随流量呼吸。",
        quote_max_tier: "“在使用 Corp 之前，我们深陷技术债务。'Max' 层不仅解决了我们的问题；它重新定义了我们的工作流程。”",
        quote_max_tier_cite: "—— Alex V., FinTech Global 首席技术官",
        cta_ready_to_evolve: "准备好进化了吗？",
        cta_join_companies: "加入 500 多家前瞻性公司，共同构建未来。",

        // --- 关于我们 (新增) ---
        about_hero_title: "我们是 Corp。",
        about_hero_desc: "弥合复杂技术与简单人性之间的鸿沟。建立在软件应隐于无形的信念之上。",
        about_mission_title: "我们的使命",
        about_mission_desc_1: "自 2025 年以来，我们致力于一个目标：消除摩擦。在充满噪音的世界里，Corp 提供清晰的信号。我们构建工具，让企业能够扩缩规模而无需背负技术债务。",
        about_mission_desc_2: "无论是 <strong>Air</strong> 的轻盈、<strong>Vision</strong> 的清晰，还是 <strong>Max</strong> 的奢华，我们的生态系统旨在适应您，而非让您适应它。",
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
        faq_a1: "对于 <strong>Max</strong> 会员，我们在 1 小时内响应。对于标准咨询，请允许通过电子邮件最多 24 小时回复。",
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