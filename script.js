const portfolioData = {
  metrics: [
    { value: '08+', label: 'Năm kinh nghiệm định hướng sản phẩm' },
    { value: '30+', label: 'Dự án đã triển khai hoặc tham gia' },
    { value: '99%', label: 'Tập trung vào chất lượng đầu ra' },
  ],
  roles: [
    'Frontend Developer',
    'Product-minded Builder',
    'UI/UX-driven Problem Solver',
    'Professional Personal Brand Crafter',
  ],
  trustSignals: [
    { label: 'Working style', value: 'Rõ ràng, đúng hẹn, có trách nhiệm' },
    { label: 'Output quality', value: 'Ưu tiên trải nghiệm premium và cảm giác chắc tay' },
    { label: 'Mindset', value: 'Làm việc như một người ownership, không chỉ nhận task' },
  ],
  logos: ['TRUSTED PRESENCE', 'PREMIUM EXECUTION', 'CLEAR THINKING', 'HIGH STANDARDS'],
  strengths: [
    'Hình ảnh cá nhân cao cấp',
    'Bố cục thuyết phục',
    'Tư duy sản phẩm',
    'Thực thi nhanh và chắc',
    'Khả năng kể chuyện bằng giao diện',
    'Tinh thần ownership',
  ],
  capabilities: [
    {
      title: 'Xây dựng perception chuyên nghiệp',
      description:
        'Thiết kế hệ thống nội dung và visual để người xem cảm nhận rõ sự uy tín, độ chín và tiêu chuẩn làm việc của bạn.',
    },
    {
      title: 'Thiết kế trải nghiệm có định hướng',
      description:
        'Mỗi section đều có vai trò rõ ràng: giới thiệu bản thân, chứng minh năng lực, thể hiện case study và dẫn đến hành động.',
    },
    {
      title: 'Frontend chỉn chu, responsive tốt',
      description:
        'Triển khai giao diện mượt, gọn, hiện đại; đảm bảo trải nghiệm tốt trên desktop lẫn mobile.',
    },
    {
      title: 'Ngôn ngữ thương hiệu mạnh',
      description:
        'Tone chữ được xây dựng theo hướng tự tin, đĩnh đạc và có chất lượng để portfolio không bị mờ nhạt.',
    },
  ],
  timeline: [
    {
      step: '01',
      title: 'Làm rõ định vị cá nhân',
      description: 'Xác định vai trò, điểm mạnh, giá trị khác biệt và thông điệp cốt lõi cần truyền tải.',
    },
    {
      step: '02',
      title: 'Cấu trúc nội dung chiến lược',
      description: 'Sắp xếp thông tin theo logic giúp người xem tin tưởng nhanh hơn: bạn là ai, mạnh gì, đã làm gì.',
    },
    {
      step: '03',
      title: 'Thiết kế visual đậm chất premium',
      description: 'Dùng màu sắc, khoảng trắng, typography và card layout để tạo cảm giác đẳng cấp, mạnh và chuyên nghiệp.',
    },
    {
      step: '04',
      title: 'Chốt bằng bằng chứng và liên hệ',
      description: 'Hiển thị case study, tiêu chuẩn làm việc và kênh liên hệ rõ ràng để tăng khả năng chuyển đổi.',
    },
  ],
  standards: [
    'Tư duy hệ thống thay vì làm từng phần rời rạc',
    'Visual sạch, sang, không phô trương nhưng vẫn nổi bật',
    'Ngôn ngữ thể hiện sự tự tin và trưởng thành',
    'Tập trung vào giá trị cảm nhận của người xem',
  ],
  projects: [
    {
      title: 'Executive Personal Portfolio',
      description:
        'Portfolio dành cho cá nhân muốn định vị ở nhóm chất lượng cao: giao diện sang, nhấn mạnh credibility, case study và thành tựu.',
      tags: ['Positioning', 'Premium UI', 'Trust-first'],
    },
    {
      title: 'Conversion-focused Service Page',
      description:
        'Landing page cho dịch vụ chuyên môn với cấu trúc dẫn dắt rõ: nỗi đau, giải pháp, bằng chứng, quy trình và CTA.',
      tags: ['Strategy', 'Storytelling', 'Execution'],
    },
    {
      title: 'Founder / Builder Profile',
      description:
        'Trang hồ sơ cá nhân dành cho founder hoặc builder muốn thể hiện phong thái chững chạc, rõ năng lực và có gu chuyên nghiệp.',
      tags: ['Founder Brand', 'Professional Image', 'Responsive'],
    },
  ],
  testimonials: [
    {
      quote:
        'Phong cách thể hiện rất chắc. Nhìn vào là thấy sự chỉn chu, rõ tư duy và có thể tin tưởng để làm việc lâu dài.',
      author: 'Perception mục tiêu',
    },
    {
      quote:
        'Điểm mạnh của mẫu này là tạo được cảm giác cao cấp và đáng tin mà vẫn giữ trải nghiệm hiện đại, dễ đọc.',
      author: 'Định vị hình ảnh cá nhân',
    },
  ],
  contacts: [
    {
      label: 'Email',
      value: 'yourname@email.com',
      href: 'mailto:yourname@email.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-profile',
      href: 'https://linkedin.com/in/your-profile',
    },
    {
      label: 'GitHub',
      value: 'github.com/your-username',
      href: 'https://github.com/your-username',
    },
    {
      label: 'Phone',
      value: '+84 000 000 000',
      href: 'tel:+84000000000',
    },
  ],
};

const renderList = (items, targetId, mapFn) => {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(mapFn).join('');
};

renderList(
  portfolioData.metrics,
  'hero-metrics',
  (item) => `
    <div class="metric-item">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `
);

renderList(
  portfolioData.roles,
  'roles-list',
  (role, index) => `<li><span>${role}</span><strong>0${index + 1}</strong></li>`
);

renderList(
  portfolioData.trustSignals,
  'trust-list',
  (item) => `
    <div class="trust-item">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `
);

renderList(
  portfolioData.logos,
  'logo-strip',
  (item) => `<span>${item}</span>`
);

renderList(
  portfolioData.strengths,
  'strength-list',
  (strength) => `<span class="chip">${strength}</span>`
);

renderList(
  portfolioData.capabilities,
  'capability-grid',
  (item) => `
    <article class="glass-card capability-card">
      <p class="eyebrow">Capability</p>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </article>
  `
);

renderList(
  portfolioData.timeline,
  'timeline-list',
  (item) => `
    <article class="timeline-item">
      <div class="timeline-step">${item.step}</div>
      <div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </article>
  `
);

renderList(
  portfolioData.standards,
  'standards-list',
  (item) => `
    <div class="standard-item">
      <span class="standard-dot"></span>
      <p>${item}</p>
    </div>
  `
);

renderList(
  portfolioData.projects,
  'project-grid',
  (project, index) => `
    <article class="glass-card project-card">
      <div class="project-visual project-visual-${index + 1}"></div>
      <div class="project-copy">
        <p class="eyebrow">Case ${index + 1}</p>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      </div>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
    </article>
  `
);

renderList(
  portfolioData.testimonials,
  'testimonial-list',
  (item) => `
    <blockquote class="testimonial-item">
      <p>${item.quote}</p>
      <footer>${item.author}</footer>
    </blockquote>
  `
);

renderList(
  portfolioData.contacts,
  'contact-list',
  (contact) => `
    <a class="contact-item" href="${contact.href}" target="_blank" rel="noreferrer">
      <strong>${contact.label}</strong>
      <span>${contact.value}</span>
    </a>
  `
);
