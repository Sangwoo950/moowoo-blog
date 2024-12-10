export default {
  /**
   * basic Information
   */
  title: `sang-woo.com`,
  description: `개발자 무우`,
  language: `ko`,
  siteUrl: `https://sang-woo.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `박상우`,
    nickname: `무우`,
    stack: ['Frontend', 'React', 'Typescript', 'SQL', 'Vue'],
    bio: {
      email: `qtd950@gmail.com`,
      residence: 'Suwon, South Korea',
      bachelorDegree: 'Ansan Univ. Tourism English (2014.03-2019.02)',
    },
    social: {
      github: `https://github.com/Sangwoo950`,
      linkedIn: `https://www.linkedin.com/in/sangwoo950/`,
      resume: `https://www.figma.com/file/dtkCl6G7G5DVe18DN2LWny/%EC29D3B4%D3%A0%95%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0%3A1`,
    },
    dropdown: {
      tistory: 'https://raphaeluju.tistory.com/',
      velog: 'https://velog.io/@u_ju',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'moowoo-ssul',
      category: 'featured-ssul',
    },
    {
      title: 'troubleshooting',
      category: 'featured-troubleshooting',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2024.02.03 - NOW',
      en: 'Wadiz Corp.',
      kr: '와디즈(주)',
      info: 'CX',
      link: 'https://www.wadiz.kr/web/main',
    },
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'BhnB Corp.',
      kr: '반비(주)',
      info: '개발팀',
      link: 'https://www.bahnb.com/',
    },
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'DongBo Corp.',
      kr: '동보산업(주)',
      info: '믈류팀',
      link: 'http://www.dongbo21.com/',
    },
    // {
    //   category: 'Activity',
    //   date: '2023.07 - NOW',
    //   en: 'Community',
    //   kr: '커뮤니티',
    //   info: 'IT 커뮤니티',
    //   link: '',
    // },
    {
      category: 'Education',
      date: '2023.07 - NOW',
      en: 'Education',
      kr: '교육',
      info: '정보처리산업기사(과정평가형)JAVA',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
