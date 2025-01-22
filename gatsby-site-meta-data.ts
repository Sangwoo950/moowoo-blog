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
      repo: ``, //`sangwoo950/danmin-gatsby-blog`,
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
      resume: `https://www.figma.com/design/lafyOejkWm3KCtyZQfencm/%EB%B0%95%EC%83%81%EC%9A%B0-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&t=LKWruIn4zslIkyc1-1`,
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
      title: 'ssul',
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
      info: 'CX팀 - 솔루션 개발/기획자',
      link: 'https://www.wadiz.kr/web/main',
    },
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'BhnB Corp.',
      kr: '반비(주)',
      info: '개발팀 - 웹 개발자',
      link: 'https://www.bahnb.com/',
    },
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'DongBo Corp.',
      kr: '동보산업(주)',
      info: '믈류팀 - 자재관리',
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
      en: '정보처리산업기사(과정평가형) JAVA',
      kr: '',
      info: 'Java 프로그래밍 및 소프트웨어 개발',
      link: 'https://www.example.com/java-certification',
    },
    {
      category: 'Education',
      date: '2023.07 - NOW',
      en: '내일배움캠프 React 1기',
      kr: '',
      info: 'React 프레임워크를 활용한 웹, 애플리케이션 개발.',
      link: 'https://www.example.com/react-camp',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Tipper',
      description: '포트폴리오',
      techStack: ['React', 'Firebase', 'Typescript', 'lodash', 'axios', 'Vercel'],
      thumbnailUrl: '/assets/tipper_thumbnail.jpg', // Path to your in the 'assets' folder
      links: {
        post: '금융관리 초보자를 위한 팁을 드려요! 자금 마련의 기본인 예금, 적금 상품들을 비교해주고 꿀팁들을 공유하는 사이트입니다.',
        github: 'https://github.com/Sangwoo950/open-an-account?tab=readme-ov-file',
        demo: 'https://tipper-seven.vercel.app/',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'GND',
      description: '포트폴리오',
      techStack: ['React', 'TypeScript', 'Youtube API', 'Firebase', 'Vercel'],
      thumbnailUrl: '/assets/Tipper_thumbnaul.jpg', // Path to your in the 'assets' folder
      links: {
        post: '개발자 나두 할 수 있어!, 웹개발 공부를 하는 학생들이 강의를 듣기 편하도록 카테고리 별로 나누어 유튜브 강의를 제공한다..',
        github: 'https://github.com/Sangwoo950/open-an-account?tab=readme-ov-file',
        demo: 'https://tipper-seven.vercel.app/',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'GND',
      description: '포트폴리오',
      techStack: ['React', 'TypeScript', 'Youtube API', 'Firebase', 'Vercel'],
      thumbnailUrl: 'assets/Tipper_thumbnaul.jpg', // Path to your in the 'assets' folder
      links: {
        post: '개발자 나두 할 수 있어!, 웹개발 공부를 하는 학생들이 강의를 듣기 편하도록 카테고리 별로 나누어 유튜브 강의를 제공한다..',
        github: 'https://github.com/Sangwoo950/open-an-account?tab=readme-ov-file',
        demo: 'https://tipper-seven.vercel.app/',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'GND',
      description: '포트폴리오',
      techStack: ['React', 'TypeScript', 'Youtube API', 'Firebase', 'Vercel'],
      thumbnailUrl: '/assets/Tipper_thumbnaul.jpg', // Path to your in the 'assets' folder
      links: {
        post: '개발자 나두 할 수 있어!, 웹개발 공부를 하는 학생들이 강의를 듣기 편하도록 카테고리 별로 나누어 유튜브 강의를 제공한다..',
        github: 'https://github.com/Sangwoo950/open-an-account?tab=readme-ov-file',
        demo: 'https://tipper-seven.vercel.app/',
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
      link: 'https://toss.me/',
      qrCode: 'toss_qr_test.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr_test.svg', // Path to your in the 'assets' folder
    },
  },
};
