const SUPABASE_URL = "https://qomhlmrcqhyjuqozojyu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Kn6cNQHptVNcLNVM0rSB1Q_EN9MuC5B";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const typeOrder = ["R", "S", "I", "L", "P", "C"];

const typeNames = {
  R: "R型 科研探索型青年",
  S: "S型 社会服务型青年",
  I: "I型 创新创业型青年",
  L: "L型 组织领导型青年",
  P: "P型 实践应用型青年",
  C: "C型 传播表达型青年"
};

const typeShortNames = {
  R: "科研探索",
  S: "社会服务",
  I: "创新创业",
  L: "组织领导",
  P: "实践应用",
  C: "传播表达"
};

const typeValues = {
  R: 1,
  S: 2,
  I: 3,
  L: 4,
  P: 5,
  C: 6
};

const types = {
  R: {
    name: "R型 科研探索型青年",
    keywords: "探索、钻研、理性、求真",
    desc: "你喜欢研究问题背后的原理，面对复杂任务时愿意查资料、做分析、找规律。你适合在科研训练、实验项目、学科竞赛和技术攻关中发挥作用。",
    advice: "建议继续提升专业基础、文献阅读能力、数据分析能力和长期专注能力。",
    slogan: "以探索精神追问未知，用专业能力服务时代发展。"
  },
  S: {
    name: "S型 社会服务型青年",
    keywords: "奉献、责任、温度、服务",
    desc: "你关心他人，也重视社会价值。你更容易从真实场景中获得意义感，适合参与志愿服务、社区实践、公益活动和基层调研。",
    advice: "建议继续提升沟通能力、组织服务能力和问题观察能力。",
    slogan: "在服务他人中锤炼本领，在奉献社会中书写青春。"
  },
  I: {
    name: "I型 创新创业型青年",
    keywords: "创意、突破、尝试、变化",
    desc: "你点子多，喜欢尝试新事物，也愿意打破常规。你适合参与创新创业项目、产品设计和跨学科实践。",
    advice: "建议继续提升方案落地能力、风险判断能力和团队协作能力。",
    slogan: "以创新回应时代问题，用创意打开青春可能。"
  },
  L: {
    name: "L型 组织领导型青年",
    keywords: "协调、引领、责任、团队",
    desc: "你擅长统筹任务、分配资源、推动团队合作。你适合在班级建设、学生组织、项目管理和大型活动中发挥作用。",
    advice: "建议继续提升沟通协调能力、决策能力、时间管理能力和责任意识。",
    slogan: "以责任凝聚集体，用行动带动更多青年同行。"
  },
  P: {
    name: "P型 实践应用型青年",
    keywords: "实干、应用、执行、落地",
    desc: "你行动力强，重视实际效果，喜欢把想法变成看得见的成果。你适合实习实践、工程训练、技术应用和产业转化类任务。",
    advice: "建议继续提升专业技能、动手能力、问题解决能力和执行稳定性。",
    slogan: "把理想落在行动里，把专业写进实践中。"
  },
  C: {
    name: "C型 传播表达型青年",
    keywords: "表达、传播、影响、连接",
    desc: "你善于表达，能够把复杂内容讲清楚，也能通过文字、视频、演讲或设计影响他人。你适合主题宣讲、新闻宣传、科普传播和文化作品创作。",
    advice: "建议继续提升逻辑表达能力、写作能力、公众演讲能力和视觉呈现能力。",
    slogan: "以表达传递信念，用传播凝聚青春力量。"
  }
};

const questions = [
  {
    title: "小组作业开始时，你通常最想做什么？",
    options: [
      { type: "R", text: "A. 先研究资料和原理，把问题弄清楚" },
      { type: "S", text: "B. 先考虑这个任务对大家有什么帮助" },
      { type: "I", text: "C. 先想一个新颖、有亮点的方案" },
      { type: "L", text: "D. 先分工，确定谁负责什么" },
      { type: "P", text: "E. 先开始动手做，边做边调整" },
      { type: "C", text: "F. 先思考怎么展示得更清楚、更吸引人" }
    ]
  },
  {
    title: "看到一个社会问题时，你第一反应是？",
    options: [
      { type: "R", text: "A. 想分析它背后的原因和机制" },
      { type: "S", text: "B. 想知道自己能不能直接帮助相关人群" },
      { type: "I", text: "C. 想设计一个新的解决方案" },
      { type: "L", text: "D. 想组织一群人一起解决" },
      { type: "P", text: "E. 想马上尝试一个实际可行的办法" },
      { type: "C", text: "F. 想把这个问题讲给更多人听" }
    ]
  },
  {
    title: "你最喜欢哪类活动？",
    options: [
      { type: "R", text: "A. 科研讲座、实验训练、学术分享" },
      { type: "S", text: "B. 志愿服务、公益活动、社区实践" },
      { type: "I", text: "C. 创新创业、创意设计、项目比赛" },
      { type: "L", text: "D. 学生工作、团队管理、活动策划" },
      { type: "P", text: "E. 实习实践、工程制作、应用操作" },
      { type: "C", text: "F. 演讲主持、写作表达、宣传展示" }
    ]
  },
  {
    title: "你认为自己最明显的优势是？",
    options: [
      { type: "R", text: "A. 善于钻研问题" },
      { type: "S", text: "B. 有同理心，愿意帮助别人" },
      { type: "I", text: "C. 点子多，喜欢尝试新东西" },
      { type: "L", text: "D. 有组织能力，能协调团队" },
      { type: "P", text: "E. 动手能力强，执行速度快" },
      { type: "C", text: "F. 表达能力好，能把事情讲清楚" }
    ]
  },
  {
    title: "你更愿意完成哪种任务？",
    options: [
      { type: "R", text: "A. 分析一组实验数据" },
      { type: "S", text: "B. 参与一次志愿服务" },
      { type: "I", text: "C. 设计一个校园创意项目" },
      { type: "L", text: "D. 统筹一次班级活动" },
      { type: "P", text: "E. 完成一个实物制作或实践任务" },
      { type: "C", text: "F. 制作一篇推文或汇报视频" }
    ]
  },
  {
    title: "遇到困难时，你更常采用什么方式？",
    options: [
      { type: "R", text: "A. 查资料，找规律，反复推理" },
      { type: "S", text: "B. 找人交流，理解大家的需求" },
      { type: "I", text: "C. 换一个思路，尝试新方法" },
      { type: "L", text: "D. 组织讨论，把问题拆分给团队" },
      { type: "P", text: "E. 先做出一个初版，再不断修改" },
      { type: "C", text: "F. 把问题表达出来，争取更多支持" }
    ]
  },
  {
    title: "你最有成就感的时刻是？",
    options: [
      { type: "R", text: "A. 终于理解了一个复杂知识点" },
      { type: "S", text: "B. 真的帮助到了一个人" },
      { type: "I", text: "C. 想出的创意被大家认可" },
      { type: "L", text: "D. 带领团队顺利完成任务" },
      { type: "P", text: "E. 做出了一个能实际使用的成果" },
      { type: "C", text: "F. 自己的表达打动了别人" }
    ]
  },
  {
    title: "你更喜欢的学习方式是？",
    options: [
      { type: "R", text: "A. 深入阅读和独立思考" },
      { type: "S", text: "B. 在服务和交流中学习" },
      { type: "I", text: "C. 通过项目和创意任务学习" },
      { type: "L", text: "D. 通过团队合作和组织协调学习" },
      { type: "P", text: "E. 通过操作、实验和实践学习" },
      { type: "C", text: "F. 通过讲解、输出和表达学习" }
    ]
  },
  {
    title: "未来选择方向时，你最看重什么？",
    options: [
      { type: "R", text: "A. 能不能持续探索未知问题" },
      { type: "S", text: "B. 能不能服务社会、帮助他人" },
      { type: "I", text: "C. 能不能实现自己的创意" },
      { type: "L", text: "D. 能不能带动团队共同成长" },
      { type: "P", text: "E. 能不能解决现实中的具体问题" },
      { type: "C", text: "F. 能不能传播知识、影响他人" }
    ]
  },
  {
    title: "班级要做一个主题团日活动，你最想负责？",
    options: [
      { type: "R", text: "A. 查找资料，梳理理论内容" },
      { type: "S", text: "B. 设计服务实践或公益环节" },
      { type: "I", text: "C. 设计有趣的互动玩法" },
      { type: "L", text: "D. 负责整体流程和人员分工" },
      { type: "P", text: "E. 负责场地、物资和现场执行" },
      { type: "C", text: "F. 负责主持、拍摄、推文和展示" }
    ]
  },
  {
    title: "你更容易被哪种人物打动？",
    options: [
      { type: "R", text: "A. 长期坚持科研攻关的人" },
      { type: "S", text: "B. 扎根基层、服务群众的人" },
      { type: "I", text: "C. 敢想敢做、开创新事物的人" },
      { type: "L", text: "D. 凝聚团队、带领集体进步的人" },
      { type: "P", text: "E. 技术过硬、解决实际难题的人" },
      { type: "C", text: "F. 用语言和作品影响他人的人" }
    ]
  },
  {
    title: "面对一个专业课题，你更想做哪部分？",
    options: [
      { type: "R", text: "A. 理论分析和文献研究" },
      { type: "S", text: "B. 研究它能帮助哪些群体" },
      { type: "I", text: "C. 寻找新角度、新应用" },
      { type: "L", text: "D. 负责小组协作和进度安排" },
      { type: "P", text: "E. 做实验、搭系统、跑流程" },
      { type: "C", text: "F. 做汇报、写总结、讲成果" }
    ]
  },
  {
    title: "你认为“青春奋斗”更接近哪种状态？",
    options: [
      { type: "R", text: "A. 长期钻研一个问题" },
      { type: "S", text: "B. 在服务他人中体现价值" },
      { type: "I", text: "C. 勇敢尝试新的可能" },
      { type: "L", text: "D. 带着大家一起前进" },
      { type: "P", text: "E. 把想法一步步做出来" },
      { type: "C", text: "F. 把有价值的声音传播出去" }
    ]
  },
  {
    title: "老师布置一个开放性任务，你会先？",
    options: [
      { type: "R", text: "A. 建立问题框架" },
      { type: "S", text: "B. 明确服务对象和实际意义" },
      { type: "I", text: "C. 头脑风暴多个创意方案" },
      { type: "L", text: "D. 制定计划表和分工表" },
      { type: "P", text: "E. 先做一个可以展示的雏形" },
      { type: "C", text: "F. 思考最终汇报怎么呈现" }
    ]
  },
  {
    title: "你更希望自己大学期间积累什么？",
    options: [
      { type: "R", text: "A. 科研能力和学术思维" },
      { type: "S", text: "B. 志愿服务和社会责任经历" },
      { type: "I", text: "C. 创新项目和竞赛成果" },
      { type: "L", text: "D. 组织管理和团队经验" },
      { type: "P", text: "E. 实践技能和应用能力" },
      { type: "C", text: "F. 表达能力和传播作品" }
    ]
  },
  {
    title: "你最不容易感到厌烦的事情是？",
    options: [
      { type: "R", text: "A. 查文献、做分析、改模型" },
      { type: "S", text: "B. 倾听他人需求，参与服务" },
      { type: "I", text: "C. 想创意、改方案、做设计" },
      { type: "L", text: "D. 协调人员，推进任务" },
      { type: "P", text: "E. 动手调试，解决现场问题" },
      { type: "C", text: "F. 写稿、演讲、拍摄、剪辑" }
    ]
  },
  {
    title: "团队里出现分歧，你更倾向于？",
    options: [
      { type: "R", text: "A. 回到事实和数据，理性判断" },
      { type: "S", text: "B. 关注每个人的感受和需求" },
      { type: "I", text: "C. 提出一个折中的新方案" },
      { type: "L", text: "D. 组织讨论，推动形成共识" },
      { type: "P", text: "E. 先试一种方案，用结果说话" },
      { type: "C", text: "F. 总结各方观点，让大家听懂" }
    ]
  },
  {
    title: "你更喜欢哪类成果？",
    options: [
      { type: "R", text: "A. 一份分析严谨的研究报告" },
      { type: "S", text: "B. 一次有温度的服务记录" },
      { type: "I", text: "C. 一个有创意的项目方案" },
      { type: "L", text: "D. 一场组织有序的活动" },
      { type: "P", text: "E. 一个真正能用的作品或系统" },
      { type: "C", text: "F. 一个有感染力的视频或演讲" }
    ]
  },
  {
    title: "你觉得自己最适合的角色是？",
    options: [
      { type: "R", text: "A. 研究者" },
      { type: "S", text: "B. 服务者" },
      { type: "I", text: "C. 创意者" },
      { type: "L", text: "D. 组织者" },
      { type: "P", text: "E. 执行者" },
      { type: "C", text: "F. 表达者" }
    ]
  },
  {
    title: "你更愿意加入哪类团队？",
    options: [
      { type: "R", text: "A. 科研训练小组" },
      { type: "S", text: "B. 志愿服务团队" },
      { type: "I", text: "C. 创新创业团队" },
      { type: "L", text: "D. 学生组织或项目管理团队" },
      { type: "P", text: "E. 工程实践或实习团队" },
      { type: "C", text: "F. 宣讲、媒体或科普团队" }
    ]
  },
  {
    title: "面对未来职业，你最期待的是？",
    options: [
      { type: "R", text: "A. 探索前沿技术或学术问题" },
      { type: "S", text: "B. 在岗位上服务社会需要" },
      { type: "I", text: "C. 做出自己的创新产品或项目" },
      { type: "L", text: "D. 成为能带团队的人" },
      { type: "P", text: "E. 用专业技能解决实际问题" },
      { type: "C", text: "F. 用表达和传播产生影响力" }
    ]
  },
  {
    title: "你更认同哪句话？",
    options: [
      { type: "R", text: "A. 把一个问题研究透，本身就是价值" },
      { type: "S", text: "B. 能帮助别人，是青年很重要的意义" },
      { type: "I", text: "C. 年轻人要敢于提出新想法" },
      { type: "L", text: "D. 一个人走得快，一群人走得远" },
      { type: "P", text: "E. 想法落地，才真正产生作用" },
      { type: "C", text: "F. 好的表达能让更多人理解价值" }
    ]
  },
  {
    title: "当你获得一段自由时间，你更可能？",
    options: [
      { type: "R", text: "A. 看书、查资料、学习新知识" },
      { type: "S", text: "B. 参加公益、陪伴或服务活动" },
      { type: "I", text: "C. 构思一个新项目" },
      { type: "L", text: "D. 约同学一起完成一件事" },
      { type: "P", text: "E. 做手工、练技能、完成任务" },
      { type: "C", text: "F. 写东西、拍视频、准备分享" }
    ]
  },
  {
    title: "你在班级中更常被大家需要来做什么？",
    options: [
      { type: "R", text: "A. 解释难题" },
      { type: "S", text: "B. 安慰和帮助同学" },
      { type: "I", text: "C. 想点子" },
      { type: "L", text: "D. 组织安排" },
      { type: "P", text: "E. 跑流程、做执行" },
      { type: "C", text: "F. 写文案、做展示" }
    ]
  },
  {
    title: "你希望自己的青春关键词是？",
    options: [
      { type: "R", text: "A. 探索" },
      { type: "S", text: "B. 奉献" },
      { type: "I", text: "C. 创新" },
      { type: "L", text: "D. 引领" },
      { type: "P", text: "E. 实干" },
      { type: "C", text: "F. 传播" }
    ]
  },
  {
    title: "你最能接受哪种挑战？",
    options: [
      { type: "R", text: "A. 长时间研究一个难题" },
      { type: "S", text: "B. 走进真实场景服务他人" },
      { type: "I", text: "C. 从零设计一个新方案" },
      { type: "L", text: "D. 带领团队完成复杂任务" },
      { type: "P", text: "E. 在压力下把事情做成" },
      { type: "C", text: "F. 面向公众完成一次表达" }
    ]
  },
  {
    title: "你更愿意把专业能力用于？",
    options: [
      { type: "R", text: "A. 推动科学研究和技术进步" },
      { type: "S", text: "B. 改善他人的生活质量" },
      { type: "I", text: "C. 孵化新产品、新模式、新项目" },
      { type: "L", text: "D. 建设更高效的团队或组织" },
      { type: "P", text: "E. 解决行业中的实际问题" },
      { type: "C", text: "F. 做科普、宣传和知识传播" }
    ]
  },
  {
    title: "你觉得自己最需要提升的是？",
    options: [
      { type: "R", text: "A. 研究深度和专业基础" },
      { type: "S", text: "B. 服务意识和社会实践能力" },
      { type: "I", text: "C. 创新思维和风险意识" },
      { type: "L", text: "D. 领导力和协调能力" },
      { type: "P", text: "E. 实操能力和执行稳定性" },
      { type: "C", text: "F. 表达能力和公众影响力" }
    ]
  },
  {
    title: "你更喜欢哪种团日成果？",
    options: [
      { type: "R", text: "A. 研究型学习报告" },
      { type: "S", text: "B. 志愿服务记录册" },
      { type: "I", text: "C. 创意方案集" },
      { type: "L", text: "D. 活动组织手册" },
      { type: "P", text: "E. 实践成果展示" },
      { type: "C", text: "F. 宣传视频或推文合集" }
    ]
  },
  {
    title: "你希望别人怎样评价你？",
    options: [
      { type: "R", text: "A. 他很会思考，研究问题很深入" },
      { type: "S", text: "B. 他很温暖，愿意为别人付出" },
      { type: "I", text: "C. 他很有创意，总能带来新想法" },
      { type: "L", text: "D. 他很可靠，能把团队带起来" },
      { type: "P", text: "E. 他很能干，事情交给他很放心" },
      { type: "C", text: "F. 他很会表达，能让大家产生共鸣" }
    ]
  }
];

let answers = new Array(questions.length).fill(null);
let currentScores = null;
let currentResultType = null;
let realtimeChannel = null;

document.addEventListener("DOMContentLoaded", async () => {
  bindEvents();
  showOnly("homePage");
  await loadSubmissions();
  setupRealtime();
});

function bindEvents() {
  document.getElementById("startBtn").addEventListener("click", startQuiz);
  document.getElementById("submitQuizBtn").addEventListener("click", submitQuiz);
  document.getElementById("goCoordinateBtn").addEventListener("click", goToCoordinateForm);
  document.getElementById("submitCoordinateBtn").addEventListener("click", submitCoordinateCard);
  document.getElementById("backHomeBtn").addEventListener("click", backHome);
}

function showOnly(pageId) {
  ["homePage", "quizPage", "resultPage", "coordinatePage", "classMapPage"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function startQuiz() {
  answers = new Array(questions.length).fill(null);
  currentScores = null;
  currentResultType = null;
  renderQuestions();
  showOnly("quizPage");
}

function renderQuestions() {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  document.getElementById("totalCount").textContent = questions.length;

  questions.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = `${index + 1}. ${question.title}`;
    card.appendChild(title);

    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = option.text;

      btn.addEventListener("click", () => {
        answers[index] = option.type;

        card.querySelectorAll(".option").forEach(item => {
          item.classList.remove("selected");
        });

        btn.classList.add("selected");
        updateProgress();
      });

      card.appendChild(btn);
    });

    container.appendChild(card);
  });

  updateProgress();
}

function updateProgress() {
  const count = answers.filter(item => item !== null).length;
  document.getElementById("answeredCount").textContent = count;
}

function submitQuiz() {
  const firstUnansweredIndex = answers.findIndex(item => item === null);

  if (firstUnansweredIndex !== -1) {
    alert(`还有第 ${firstUnansweredIndex + 1} 题没有完成，请答完后再提交。`);

    const target = document.querySelectorAll(".question-card")[firstUnansweredIndex];
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    target.classList.add("warning");

    setTimeout(() => {
      target.classList.remove("warning");
    }, 1500);

    return;
  }

  const scores = {
    R: 0,
    S: 0,
    I: 0,
    L: 0,
    P: 0,
    C: 0
  };

  answers.forEach(type => {
    scores[type]++;
  });

  currentScores = scores;
  currentResultType = getTopType(scores);

  showResult(currentResultType, scores);
}

function getTopType(scores) {
  let topType = "R";

  typeOrder.forEach(type => {
    if (scores[type] > scores[topType]) {
      topType = type;
    }
  });

  return topType;
}

function getTopTypes(scores) {
  const maxScore = Math.max(...Object.values(scores));
  return typeOrder.filter(type => scores[type] === maxScore);
}

function showResult(type, scores) {
  const result = types[type];
  const topTypes = getTopTypes(scores);

  let titleText = `你的结果：${result.name}`;

  if (topTypes.length > 1) {
    titleText = `你的结果：${topTypes.map(item => typeNames[item]).join(" + ")}`;
  }

  document.getElementById("resultTitle").textContent = titleText;
  document.getElementById("resultText").textContent = `关键词：${result.keywords}。${result.desc}`;
  document.getElementById("resultAdvice").textContent = result.advice;
  document.getElementById("resultSlogan").textContent = result.slogan;

  const avatar = document.getElementById("resultAvatar");
  avatar.className = `avatar ${type}`;

  const scoreGrid = document.getElementById("scoreGrid");
  scoreGrid.innerHTML = "";

  typeOrder.forEach(key => {
    const item = document.createElement("div");
    item.className = "score-item";
    item.innerHTML = `${key}型<br>${scores[key]}分`;
    scoreGrid.appendChild(item);
  });

  showOnly("resultPage");
}

function goToCoordinateForm() {
  document.getElementById("autoResult").value = typeNames[currentResultType];
  document.getElementById("xType").value = currentResultType;
  document.getElementById("yType").value = currentResultType;
  showOnly("coordinatePage");
}

async function submitCoordinateCard() {
  const name = document.getElementById("studentName").value.trim();
  const className = document.getElementById("className").value.trim();
  const interestText = document.getElementById("interestText").value.trim();
  const abilityText = document.getElementById("abilityText").value.trim();
  const needText = document.getElementById("needText").value.trim();
  const finalDirection = document.getElementById("finalDirection").value.trim();
  const xType = document.getElementById("xType").value;
  const yType = document.getElementById("yType").value;

  if (!name || !className || !interestText || !abilityText || !needText || !finalDirection) {
    alert("请把青春坐标卡填写完整后再提交。");
    return;
  }

  const button = document.getElementById("submitCoordinateBtn");
  button.disabled = true;
  button.textContent = "提交中...";

  const submission = {
    name: name,
    class_name: className,

    result_type: currentResultType,
    result_name: typeNames[currentResultType],
    scores: currentScores,

    interest_text: interestText,
    ability_text: abilityText,
    need_text: needText,
    final_direction: finalDirection,

    x_type: xType,
    y_type: yType
  };

  const { error } = await supabaseClient
    .from("ypti_submissions")
    .insert(submission);

  button.disabled = false;
  button.textContent = "提交到班级坐标图";

  if (error) {
    console.error("Supabase insert error:", error);
    alert("提交失败，请检查 Supabase 表权限、网络连接或控制台错误。");
    return;
  }

  await loadSubmissions();
  showOnly("classMapPage");
}

function normalizeSubmission(row) {
  return {
    id: row.id,
    name: row.name,
    className: row.class_name,
    resultType: row.result_type,
    resultName: row.result_name,
    scores: row.scores,

    interestText: row.interest_text,
    abilityText: row.ability_text,
    needText: row.need_text,
    finalDirection: row.final_direction,

    xType: row.x_type,
    yType: row.y_type,
    createdAt: row.created_at
  };
}

async function loadSubmissions() {
  const { data, error } = await supabaseClient
    .from("ypti_submissions")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase select error:", error);
    return;
  }

  const list = data.map(normalizeSubmission);
  renderClassMap(list);
}

function setupRealtime() {
  if (realtimeChannel) {
    return;
  }

  realtimeChannel = supabaseClient
    .channel("ypti-submissions-realtime")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "ypti_submissions"
      },
      async () => {
        await loadSubmissions();
      }
    )
    .subscribe();
}

function renderClassMap(list) {
  renderTypeSummary(list);
  renderCoordinateMap(list);
  renderDirectionList(list);
}

function renderTypeSummary(list) {
  const summary = {
    R: 0,
    S: 0,
    I: 0,
    L: 0,
    P: 0,
    C: 0
  };

  list.forEach(item => {
    if (summary[item.resultType] !== undefined) {
      summary[item.resultType]++;
    }
  });

  const box = document.getElementById("typeSummary");
  box.innerHTML = "";

  typeOrder.forEach(type => {
    const div = document.createElement("div");
    div.className = "score-item";
    div.innerHTML = `${type}型 ${typeShortNames[type]}<br>${summary[type]}人`;
    box.appendChild(div);
  });
}

function renderCoordinateMap(list) {
  const map = document.getElementById("coordinateMap");
  map.innerHTML = "";

  list.forEach((item, index) => {
    const xValue = typeValues[item.xType] || 1;
    const yValue = typeValues[item.yType] || 1;

    const xPercent = ((xValue - 0.5) / 6) * 100;
    const yPercent = 100 - ((yValue - 0.5) / 6) * 100;

    const jitterX = ((index % 3) - 1) * 10;
    const jitterY = ((Math.floor(index / 3) % 3) - 1) * 10;

    const point = document.createElement("div");
    point.className = `point ${item.resultType}`;
    point.style.left = `${xPercent}%`;
    point.style.top = `${yPercent}%`;
    point.style.transform = `translate(calc(-50% + ${jitterX}px), calc(-50% + ${jitterY}px))`;
    point.title = `${item.name}：${item.resultName}\n${item.finalDirection}`;

    const label = document.createElement("div");
    label.className = "point-label";
    label.textContent = item.name;

    point.appendChild(label);
    map.appendChild(point);
  });
}

function renderDirectionList(list) {
  const box = document.getElementById("directionList");
  box.innerHTML = "";

  list.slice().reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "direction-item";

    div.innerHTML = `
      <strong>${escapeHtml(item.name)}</strong>
      <br>班级：${escapeHtml(item.className)}
      <br>YPTI结果：${escapeHtml(item.resultName)}
      <br>X轴兴趣：${escapeHtml(item.interestText)}
      <br>Y轴能力：${escapeHtml(item.abilityText)}
      <br>Z轴时代需要：${escapeHtml(item.needText)}
      <br>最终坐标：${escapeHtml(item.finalDirection)}
    `;

    box.appendChild(div);
  });
}

function backHome() {
  showOnly("homePage");
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}