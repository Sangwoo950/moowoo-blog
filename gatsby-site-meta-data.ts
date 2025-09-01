export default {
  /**
   * basic Information
   */
  title: `sang-woo.blog`,
  description: `개발자 박상우`,
  language: `ko`,
  siteUrl: `https://sang-woo.blog/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `sangwoo950/moowoo-blog-comments`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `박상우`,
    nickname: `상우`,
    stack: ['Frontend', 'React', 'Typescript', 'SQL'],
    bio: {
      email: `qtd950@gmail.com`,
      residence: 'Suwon, South Korea',
      bachelorDegree: 'Ansan Univ. Tourism English',
    },
    social: {
      github: `https://github.com/Sangwoo950`,
      linkedIn: `https://www.linkedin.com/in/%EC%83%81%EC%9A%B0-%EB%B0%95-132094270/`,
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
      date: '2024.05.26 - 2025.08.26',
      en: 'Bithumb Corp.',
      kr: '빗썸(주)',
      info: '영업지원 - 솔루션 개발/기획',
      link: 'https://www.bithumb.com/react',
    },
    {
      category: 'Career',
      date: '2025.04.07 - 2025.05.07',
      en: 'wadiz Corp.',
      kr: '와디즈(주)',
      info: '프리랜서 - 글로벌 도움말센터 개발',
      link: 'https://www.wadiz.kr/web/main',
    },
    {
      category: 'Career',
      date: '2024.02.03 - 2025.03.31',
      en: 'wadiz Corp.',
      kr: '와디즈(주)',
      info: 'CX 솔루션 팀 - 솔루션 개발/기획',
      link: 'https://www.wadiz.kr/web/main',
    },
    {
      category: 'Career',
      date: '2022.05.03 - 2022.08.31',
      en: 'BAHNB Corp.',
      kr: '반비(주)',
      info: '개발팀 - 웹/플랫폼 개발',
      link: 'https://www.bahnb.com/',
    },
    // {
    //   category: 'Career',
    //   date: '2020.10.19 - 2021.05.01',
    //   en: 'DdongBo Corp.',
    //   kr: '동보산업(주)',
    //   info: '믈류팀 - 자재관리',
    //   link: 'http://www.dongbo21.com/',
    // },
    {
      category: 'Project',
      date: '2025.02 - 2025.03',
      en: 'Translation Automation',
      kr: '번역 자동화',
      info: '구글 번역 API를 활용한 번역 자동화 시스템 개발',
      link: '',
    },
    {
      category: 'Project',
      date: '2025.03 - 2025.05',
      en: 'Global Help Center',
      kr: '글로벌 헬프센터 구축',
      info: '사용자 Location, Language, Device에 따른 웹페이지 개발',
      link: '',
    },
    {
      category: 'Project',
      date: '2025.01 - 2025.03',
      en: 'helpCenter SEO',
      kr: '도움말센터 SEO',
      info: '메타 태그, 키워드 배치, heading 구조 개선 등 최적화 수행',
      link: '',
    },
    {
      category: 'Project',
      date: '2025.03 - 2025.02',
      en: 'AI bot deep learning',
      kr: 'AI bot 딥러닝',
      info: 'B to B, B to C 마이그레이션 데이터 기반 AI bot 학습',
      link: '',
    },
    {
      category: 'Project',
      date: '2024.11 - 2025.01',
      en: 'AICC',
      kr: 'AICC 도입',
      info: 'Inbound, Outbound 시스템 기획 및 데이터 마이그레이션 작업',
      link: '',
    },
    {
      category: 'Project',
      date: '2024.09 - 2024.11',
      en: 'helpCenter development',
      kr: '도움말센터 개발',
      info: 'UX기반 도움말센터 메인 웹, 사이드 퀵 메뉴, 문의등록 페이지 개발',
      link: '',
    },
    {
      category: 'Education',
      date: '2022.07 - 2023.03',
      en: '내일배움캠프 React 1기',
      kr: '',
      info: 'React 프레임워크를 활용한 웹, 애플리케이션 개발.',
      link: 'https://www.example.com/react-camp',
    },
    {
      category: 'Education',
      date: '2021.03 - 2021.08',
      en: '정보처리산업기사(과정평가형) JAVA',
      kr: '',
      info: 'Java 프로그래밍 및 소프트웨어 개발',
      link: 'https://www.example.com/java-certification',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Tipper',
      description:
        '금융관리 초보자를 위한 팁을 드려요! 자금 마련의 기본인 예금, 적금 상품들을 비교해주고 꿀팁들을 공유하는 사이트입니다.',
      techStack: ['React', 'Firebase', 'Typescript', 'lodash', 'axios', 'Vercel'],
      thumbnailUrl: 'tipper_thumbnail.jpg', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/Sangwoo950/open-an-account',
        demo: 'https://tipper-seven.vercel.app',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'GND',
      description:
        '개발자 나두 할 수 있어!, 웹개발 공부를 하는 학생들이 강의를 듣기 편하도록 카테고리 별로 나누어 유튜브 강의를 제공.',
      techStack: ['React', 'TypeScript', 'Youtube API', 'Firebase', 'Vercel'],
      thumbnailUrl: 'GND_thumbnaul.gif', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/Sangwoo950/GND',
        demo: 'https://gnd-project.vercel.app/',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: 'WadizHelpcenter',
      description: 'wadiz 도움말센터',
      techStack: ['React', 'TypeScript', 'Youtube API', 'Firebase', 'Vercel'],
      thumbnailUrl: 'wadizHelpcenter.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: 'https://github.com/Sangwoo950',
        demo: 'https://helpcenter.wadiz.kr/hc/ko',
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
