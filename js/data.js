/* ============================================================
   ALL EDITABLE CONTENT LIVES HERE. No HTML/CSS edits needed.
   Dates: "YYYY-MM-DD" (or "YYYY-MM"). Sorting uses these dates,
   never the order of entries. Optional fields can be omitted.
   Items marked TODO are placeholders: verify and replace them.

   HOW TO:
   1. Add a publication      -> copy an object in `publications`.
   2. Edit a publication date -> change its `date` value.
   3. Add a research project  -> copy an object in `projects`.
   4. Add a blog post         -> add to `activity` with category "Blog".
   5. Add a highlight         -> add to `highlights`.
   6. Update profile links    -> edit `profile.links` (empty url = hidden).
   7. Update photo            -> replace assets/profile.jpg (or edit `photo`).
   8. Update CV               -> replace assets/cv.pdf (or edit `cv`).
   ============================================================ */
window.SITE = {
  profile: {
    name: "Abhinandan Mandal",
    // username: "Abhinandan",
    // pronouns: "He/Him",
    // tagline: "Decoding Complexity !!!",
    photo: "assets/AbhinandanMandal.jpeg",
    cv: "assets/cv/Abhinandan_Mandal.pdf",
    location: "New Delhi, India",
    intro:
      // "AI/ML researcher exploring deep learning, computer vision, and mechanistic interpretability. Interested in understanding how intelligent systems learn, represent, and process information.",
      "AI/ML researcher exploring deep learning, computer vision, visual perception and reasoning. Interested in understanding how intelligent systems learn, represent, and process information.",
    links: [
      { label: "GitHub", url: "https://github.com/AbhinandanMandal" },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=t_X4_LcAAAAJ&hl=en",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/abhinandanmandal/",
      },
      { label: "X", url: "https://x.com/reckonwith_avi" },
      // { label: "ORCID", url: "" },
    ],
    email: "getwithabhi02@gmail.com", // e.g. "you@example.com"
  },

  // about: [
  //   "I study how modern AI systems learn and represent information, with a focus on deep learning, computer vision, and mechanistic interpretability. I am interested in the internal representations of neural networks and in explaining why models behave as they do.",
  //   "My work includes reproducing and analysing research papers and contributing to open-source research through BlueprintML. I am looking for research-oriented academic opportunities, including PhD studies.",
  // ],
  about: [
    "Hi, I'm Abhinandan. I am currently pursuing an MS in Artificial Intelligence and Data Science at the [Indian Institute of Information Technology and Management](https://www.iiitm.ac.in/). I am passionate about how modern AI systems learn and represent information, focusing on visual perception, reasoning, and explainable AI. My research interests lie in understanding the internal representations of deep neural networks and interpreting model behavior.",
    "Parallel to my academics, I actively engage in literature surveys, original research, programming, and open-source research contributions. I am currently seeking remote, research-oriented internship opportunities to further advance my research experience while completing my degree.",
  ],
  // TODO: edit your current position, institution, education and research journey.
  aboutPosition: "",

  interests: [
    { name: "Computer Vision" },
    { name: "Deep Learning" },
    { name: "Explainable AI" },
    // {
    //   name: "Mechanistic Interpretabilit",
    //   // desc: "Which layers and circuits produce a behaviour.",
    // },
    { name: "Representation Learning" },
    { name: "Reinforcement Learning" },
    { name: "Visual Perception" },
    { name: "Visual Reasoning" },
  ],

  // PUBLICATIONS
  // status: Published | Accepted | Under Review | Preprint | In Preparation
  // TODO: verify authors and dates below.
  publications: [
    // Paper 1
    {
      title:
        "An Adaptive Attention-Based Improved Double Deep Q-Network Approach for Robust and Energy-Aware Autonomous Mobile Robot Navigation in GNSS-Denied Environments",
      authors: [
        "Abhinandan Mandal",
        "Shilpi Kumari",
        "Yashwant Singh Patel",
        "Ajay Pratap",
      ],
      venue: "ACM ICDCN 2027",
      date: "2026-10-07",
      status: "Accepted",
      // abstract:
      //   "Built A-IDDQN,adeep-RLnavigation policy for GNSS-denied mobile robots, an adaptive attention module reweights LiDAR, camera, and IMU inputs per navigation state, and an energy-utility term shapes the reward across navigation and environments",
      // keywords: ["Explainable AI"],
      links: {
        paper: "",
        arxiv: "",
        doi: "",
        code: "https://github.com/AbhinandanMandal/AMRnav",
        project: "https://github.com/AbhinandanMandal/AMRnav",
      },
    },

    // Paper 2
    {
      title:
        "Bridging Pretrained Vision and Symbolic Reasoning Through Intermediate-Layer Grounding",
      authors: ["Girievasan Manivanan", "Abhinandan Mandal"],
      venue: "ACCV M4SciReal 2026",
      date: "2026-10-21",
      status: "Accepted",
      // abstract:
      //   "Explainable AI work published at IEEE COMSNETS 2026. [Editable: add a short summary.]",
      // keywords: ["Explainable AI"],
      links: {
        paper: "",
        arxiv: "",
        doi: "",
        code: "https://github.com/AbhinandanMandal/Vision-Symbolic-Reasoning",
        project:
          "https://github.com/AbhinandanMandal/Vision-Symbolic-Reasoning",
      },
    },

    // Paper 3
    {
      title:
        "An Energy-Feasible Parallel Algorithm for Large Dynamical Networks",
      authors: ["Abhinandan Mandal", "Yashwant Singh Patel"],
      venue: "IEEE ICIIS 2026",
      date: "2026-07-07",
      status: "Accepted",
      // abstract:
      //   "Symbolic Grounding Transfer (SGT): transfers intermediate layers of InternViT into NEUMANN, evaluated on the ELVIS Gestalt benchmark.",
      // keywords: ["Neuro-symbolic", "Vision Transformers", "Gestalt"],
      links: {
        code: "https://github.com/AbhinandanMandal/SPA",
        project: "https://github.com/AbhinandanMandal/SPA",
      },
    },

    // Paper 4
    {
      title:
        "MoSE-XAI: A Lightweight MobileNetV2 Squeeze-and-Excitation Model for Crop Disease Detection with XAI Visualization",
      authors: [
        "Abhinandan Mandal",
        "Yashwant Singh Patel",
        "Anurag Choubey",
        "Anil Singh",
      ],
      venue: "IEEE COMSNETS 2026",
      date: "2025-12-20",
      status: "Published",
      // abstract:
      //   "Symbolic Grounding Transfer (SGT): transfers intermediate layers of InternViT into NEUMANN, evaluated on the ELVIS Gestalt benchmark.",
      // keywords: ["Neuro-symbolic", "Vision Transformers", "Gestalt"],
      links: {
        paper: "https://ieeexplore.ieee.org/abstract/document/11418268",
        code: "https://github.com/AbhinandanMandal/MoSE-XAI",
        project: "https://github.com/AbhinandanMandal/MoSE-XAI",
      },
    },
  ],

  // status: Ongoing | Completed | Exploring | Paper Reproduction | Open Source Contribution
  // `updated` drives sorting. TODO: set real start/updated dates.
  // projects: [
  //   {
  //     title: "Multimodal Negation Understanding",
  //     category: "Vision-Language Models, Mechanistic Interpretability",
  //     question:
  //       "How do vision-language models handle negation and counting, and which layers are responsible?",
  //     method:
  //       "Extends NegBench (CVPR 2025) and CountQA: collects new in-the-wild counting data, applies NegBench-style analysis, and runs layer-wise interpretability. Benchmarked CLIP-based VLMs on NegBench: 80% false-positive rate on negated prompts vs 40% on affirmative ones.",
  //     status: "Ongoing",
  //     start: "",
  //     updated: "2026-10-10",
  //     tech: ["PyTorch", "CLIP", "NegBench", "CountQA"],
  //     links: { github: "", paper: "", demo: "" },
  //   },
  //   {
  //     title: "Do Visual Representations Degrade Uniformly with Model Size?",
  //     category: "Representation Learning, Efficient Deep Learning",
  //     question:
  //       "As vision models shrink, do capabilities degrade uniformly or selectively?",
  //     method:
  //       "Hypothesis: retrieval and clustering survive compression while robustness and fine-grained discrimination fail earlier. Ten evaluation methods, including linear probing, k-NN, CKA, spectral analysis and scaling-law fitting.",
  //     status: "Ongoing",
  //     start: "",
  //     updated: "2026-08-24",
  //     tech: ["PyTorch", "CKA", "Linear probing"],
  //     links: { github: "" },
  //   },
  //   {
  //     title: "Benchmarking Open-Source VLMs under 5B Parameters",
  //     category: "Evaluation, Vision-Language Models",
  //     question:
  //       "How do small open VLMs compare on accuracy, hallucination, grounding, OCR and bias robustness?",
  //     method:
  //       "A seven-section evaluation framework run on Kaggle T4 GPUs, with Qwen2.5-VL-3B and Gemma-3-4B-IT as baselines.",
  //     status: "Ongoing",
  //     start: "",
  //     updated: "2026-08-24",
  //     tech: ["Transformers", "Kaggle T4"],
  //     links: { github: "" },
  //   },
  // ],

  // HIGHLIGHTS
  // TODO: dates are placeholders; set the real event dates.
  highlights: [
    {
      title:
        "Abhinandan becomes research lead at [Advanced Vision Labs](https://discord.gg/45aMaqVDk), leading fundamental & applied research in artificial intelligence and computer vision.",
      date: "2026-06-01",
      org: "Advanced Vision Labs",
      // desc: "Symbolic Grounding Transfer paper accepted.",
    },

    {
      title:
        "Abhinandan becomes the community lead at ML Paper Club. Leading students & AI enthusiast through collaborative learning and technical discussions.",
      date: "2026-07-01",
      org: "ML Paper Club",
    },

    {
      title:
        "Abhinandan joined [Intelligence Communication and Networking Group](https://www.linkedin.com/company/intelligent-communication-and-networking-group/posts/?feedView=all) as a student research intern to contribute in AI enabled communication netwrok protocol.",
      date: "2026-02-01",
      org: "I-CaN Group",
    },

    {
      title:
        "Abhinandan completed his student research intern at [Intelligence Communication and Networking Group](https://www.linkedin.com/company/intelligent-communication-and-networking-group/posts/?feedView=all). His teams work is submitted for IEEE ICC 2027",
      date: "2026-10-31",
      org: "I-CaN Group",
    },

    {
      title:
        "Abhinandan completed his term as community lead at ML Paper Club, scaled the community to 5 member to 80+ members across 10+ countries worldwide.",
      date: "2026-10-31",
      org: "ML Paper Club",
    },

    {
      title:
        "Abhinandan won the best poster presentation at AI summit 1.0 organized by [Indian Institute of Information Technology and Management](https://www.iiitm.ac.in/).",
      date: "2026-3-27",
      org: "Indian Institute of Information Technology and Management",
    },

    {
      title:
        "Abhinandan won the runner-up position in poster presentation at AI summit 2.0 organized by [Indian Institute of Information Technology and Management](https://www.iiitm.ac.in/).",
      date: "2026-10-30",
      org: "Indian Institute of Information Technology and Management",
    },

    {
      title:
        "Abhinandan selected as a peer reviewer for NeurIPS GlobalSouthAI 2026 workshop",
      date: "2026-08-10",
      org: "NeurIPS 2026",
    },

    {
      title:
        "Abhinandan selected as a peer reviewer for NeurIPS RTCA 2026 workshop",
      date: "2026-08-20",
      org: "NeurIPS 2026",
    },

    {
      title:
        "Abhinandan selected as a peer reviewer for ACCV MM4SciReal 2026 workshop",
      date: "2026-08-15",
      org: "ACCV 2026",
    },

    {
      title:
        "Abhinandan's collaborative work has been accepted into ACCV MM4SciReal 2026 workshop",
      date: "2026-10-21",
      org: "ACCV 2026",
    },

    {
      title:
        "Abhinandan accepted into data science class of GCI World 2026 by Matsuo-Iwasawa Laboratory, University of Tokyo.",
      date: "2026-8-25",
      org: "Matsuo-Iwasawa Laboratory, University of Tokyo",
    },

    {
      title:
        "Abhinandan accepted into Stanford Probability for AI 2026 by Stanford University.",
      date: "2026-9-01",
      org: "Stanford University",
    },

    {
      title:
        "Abhinandan joined [BU1LD](https://www.linkedin.com/company/the-bu1ld/posts/?feedView=all) to contribute in JEPA research cohort.",
      date: "2026-8-15",
      org: "The BU1LD",
    },
  ],

  // WRITINGS
  // category: Blog | Technical Article | Research Note | Paper Discussion | GitHub | Open Source | Reflection | Conference | Educational
  // `placeholder: true` shows a "Placeholder" badge. Delete it once replaced.
  activity: [
    {
      title:
        "[Building A Perceptron](https://medium.com/@writewithabhi/building-a-perceptron-0116ef052ba9?sharedUserId=writewithabhi)",
      category: "Technical Article",
      date: "2025-11-01",
      platform: "Medium",
      // desc: "Editable placeholder entry. Replace with your own post.",
      // url: "",
      // placeholder: true,
    },

    {
      title:
        "[Inside Artificial Minds - Part 1](https://medium.com/@writewithabhi/inside-artificial-minds-part-1-ebc31c6243e5?sharedUserId=writewithabhi)",
      category: "Technical Article",
      date: "2025-11-05",
      platform: "Medium",
    },

    {
      title:
        "[Inside Artificial Minds - Part 2](https://medium.com/@writewithabhi/inside-artificial-minds-part-2-91dfc1310513?sharedUserId=writewithabhi)",
      category: "Technical Article",
      date: "2025-11-23",
      platform: "Medium",
    },

    {
      title:
        "[Inside Artificial Minds - Part 3](https://medium.com/@writewithabhi/inside-artificial-minds-part-3-e72b7f73f372?sharedUserId=writewithabhi)",
      category: "Technical Article",
      date: "2025-11-29",
      platform: "Medium",
    },

    {
      title:
        "[Sigmoid - Visualizing Non-Linearity](https://medium.com/@writewithabhi/sigmoid-visualizing-non-linearity-b9a935c4e72c?sharedUserId=writewithabhi)",
      category: "Technical Article",
      date: "2025-12-07",
      platform: "Medium",
    },

    {
      title:
        "[Cut the Clutter of A* & Dijkstra](https://medium.com/@writewithabhi/cut-the-clutter-of-a-dijkstra-c17f37c00092?sharedUserId=writewithabhi)",
      category: "Educational",
      date: "2026-01-30",
      platform: "Medium",
    },

    {
      title:
        "[A* Search Algorithm - an approach to code intelligence](https://medium.com/@writewithabhi/a-search-algorithm-an-approach-to-code-intelligence-cd7f3520bd0c?sharedUserId=writewithabhi)",
      category: "Educational",
      date: "2026-02-05",
      platform: "Medium",
    },

    {
      title:
        "[Taking a week for detoxification](https://medium.com/@writewithabhi/taking-a-week-for-detoxification-b36cff8dd363?sharedUserId=writewithabhi)",
      category: "Reflection",
      date: "2026-03-07",
      platform: "Medium",
    },

    {
      title:
        "[Self-Supervised Learning: The Silent Revolution Behind Modern AI](https://medium.com/@writewithabhi/self-supervised-learning-the-silent-revolution-behind-modern-ai-8afe7948a41e?sharedUserId=writewithabhi)",
      category: "Educational",
      date: "2026-03-17",
      platform: "Medium",
    },

    {
      title:
        "[A Small-Scale Reproduction Report on Momentum Contrast](https://github.com/AbhinandanMandal/ML-Whitepapers)",
      category: "Technical Article",
      date: "2026-10-18",
      platform: "ML Whitepapers",
    },
  ],

  // OPEN SOURCE
  opensource: {
    featured: {
      name: "BlueprintML",
      logo: "assets/logos/blueprintml.png",
      desc: "An open-source initiative focused on reproducing AI/ML research papers, scientific analysis of machine learning methods, research discussions, educational visualizations and open-source contributions.",
      github: "https://github.com/AbhinandanMandal/BlueprintML",
      // contributions: ["[Editable: selected contribution]"],
    },
    others: [], // e.g. { name: "repo", url: "https://...", desc: "..." }
  },

  collaboration: [
    "PhD and research opportunities",
    "Research collaborations",
    "Deep learning and computer vision projects",
    "Mechanistic interpretability research",
    "Paper reproduction and scientific analysis",
    "Open-source AI/ML initiatives",
    "Technical writing and educational content",
  ],
};
