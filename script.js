// ข้อมูลแบบทดสอบ 20 ข้อ (ในภาษาไทย)
const quizData = [
    {
        question: 'ตัวดำเนินการใดใน Python ที่ใช้สำหรับหารเอาเฉพาะส่วนจำนวนเต็ม (Integer Division)?',
        options: [
            { text: '/', isCorrect: false, rationale: 'ตัวดำเนินการ / ใช้สำหรับการหารแบบทศนิยม (float division).' },
            { text: '%', isCorrect: false, rationale: 'ตัวดำเนินการ % ใช้สำหรับการหาเศษจากการหาร (modulo).' },
            { text: '**', isCorrect: false, rationale: 'ตัวดำเนินการ ** ใช้สำหรับการยกกำลัง (exponentiation).' },
            { text: '//', isCorrect: true, rationale: 'ตัวดำเนินการ // (floor division) ใช้สำหรับการหารที่ให้ผลลัพธ์เป็นจำนวนเต็มและปัดลงเสมอ' }
        ]
    },
    {
        question: 'ในการเขียนฟังก์ชันใน Python ต้องใช้คีย์เวิร์ดใดในการเริ่มต้น?',
        options: [
            { text: 'function', isCorrect: false, rationale: 'Python ไม่ได้ใช้คีย์เวิร์ด function แต่ใช้ def แทน' },
            { text: 'define', isCorrect: false, rationale: 'คีย์เวิร์ด define ไม่ได้ใช้ในการสร้างฟังก์ชันใน Python' },
            { text: 'def', isCorrect: true, rationale: 'คีย์เวิร์ด def ย่อมาจาก define ใช้ในการกำหนดฟังก์ชันใน Python' },
            { text: 'func', isCorrect: false, rationale: 'คีย์เวิร์ด func ไม่ได้ใช้ แต่ def ถูกใช้แทน' }
        ]
    },
    {
        question: 'ข้อมูลชนิดใดใน Python ที่ไม่สามารถเปลี่ยนแปลงค่าได้ (immutable)?',
        options: [
            { text: 'List', isCorrect: false, rationale: 'List เป็นข้อมูลชนิดที่เปลี่ยนแปลงค่าได้ (mutable)' },
            { text: 'Tuple', isCorrect: true, rationale: 'Tuple เป็นข้อมูลชนิดที่ไม่สามารถเปลี่ยนแปลงค่าได้หลังจากการสร้าง' },
            { text: 'Dictionary', isCorrect: false, rationale: 'Dictionary เป็นข้อมูลชนิดที่เปลี่ยนแปลงค่าได้ (mutable)' },
            { text: 'Set', isCorrect: false, rationale: 'Set เป็นข้อมูลชนิดที่เปลี่ยนแปลงค่าได้ (mutable)' }
        ]
    },
    {
        question: 'ผลลัพธ์ของนิพจน์ `3 * 2 ** 2` คืออะไร?',
        options: [
            { text: '36', isCorrect: false, rationale: 'ถ้าเรียงลำดับผิดเป็น $3 \\times 2 = 6$ และ $6^2 = 36$' },
            { text: '12', isCorrect: true, rationale: 'ตามลำดับความสำคัญ ตัวดำเนินการยกกำลัง (**) ทำก่อนคูณ (*) ดังนั้น $2^2 = 4$ และ $3 \\times 4 = 12$' },
            { text: '8', isCorrect: false, rationale: 'ถ้าตีความเป็น $3 \\times 2$ ก่อนจะได้ 6 และ $6^2$ ซึ่งผิด' },
            { text: '6', isCorrect: false, rationale: 'ถ้าตีความเป็น $3 \\times 2 = 6$ และ $6 \\times 2 = 12$' }
        ]
    },
    {
        question: 'ในการแสดงผลข้อความออกทางหน้าจอใน Python ใช้ฟังก์ชันใด?',
        options: [
            { text: 'output()', isCorrect: false, rationale: 'ฟังก์ชัน output() ไม่ได้มีอยู่ในการใช้งาน Python พื้นฐาน' },
            { text: 'write()', isCorrect: false, rationale: 'write() มักใช้สำหรับการเขียนไฟล์ แต่ไม่ใช่สำหรับหน้าจอโดยตรง' },
            { text: 'print()', isCorrect: true, rationale: 'ฟังก์ชัน print() ใช้สำหรับการแสดงค่าหรือข้อความออกทาง Standard Output (หน้าจอ)' },
            { text: 'display()', isCorrect: false, rationale: 'ฟังก์ชัน display() ไม่ได้มีอยู่ใน Python พื้นฐาน' }
        ]
    },
    {
        question: 'คีย์เวิร์ดใดที่ใช้ในการวนซ้ำ (iteration) ใน Python และเหมาะสำหรับวนซ้ำบนลำดับ (sequence) ที่มีจำนวนรอบที่แน่นอน?',
        options: [
            { text: 'do-while', isCorrect: false, rationale: 'Python ไม่มีโครงสร้าง do-while โดยตรง' },
            { text: 'while', isCorrect: false, rationale: 'while เหมาะสำหรับจำนวนรอบที่ไม่แน่นอนหรือขึ้นอยู่กับเงื่อนไข' },
            { text: 'loop', isCorrect: false, rationale: 'loop ไม่ใช่คีย์เวิร์ดที่ใช้ในการวนซ้ำใน Python' },
            { text: 'for', isCorrect: true, rationale: 'คีย์เวิร์ด for เหมาะสำหรับวนซ้ำบนลำดับ เช่น list, tuple, range' }
        ]
    },
    {
        question: 'การเข้าถึงสมาชิกตัวแรกของ list ชื่อ `my_list` ต้องใช้ดัชนี (index) ใด?',
        options: [
            { text: 'my_list[1]', isCorrect: false, rationale: 'ดัชนี 1 คือสมาชิกตัวที่สอง' },
            { text: 'my_list[0]', isCorrect: true, rationale: 'ใน Python (และภาษาโปรแกรมส่วนใหญ่) ดัชนีเริ่มต้นที่ 0' },
            { text: 'my_list[#1]', isCorrect: false, rationale: 'นี่ไม่ใช่รูปแบบการเข้าถึงสมาชิกที่ถูกต้อง' },
            { text: 'my_list[-1]', isCorrect: false, rationale: 'ดัชนี -1 คือสมาชิกตัวสุดท้าย' }
        ]
    },
    {
        question: 'ในการเขียนเงื่อนไขแบบหลายทางเลือก นอกเหนือจาก `if` และ `else` คีย์เวิร์ดใดที่ใช้สำหรับเงื่อนไขกลาง?',
        options: [
            { text: 'otherwise', isCorrect: false, rationale: 'คีย์เวิร์ด otherwise ไม่ได้ถูกใช้ใน Python' },
            { text: 'else if', isCorrect: false, rationale: 'Python ใช้รูปแบบที่สั้นกว่าคือ elif' },
            { text: 'elseif', isCorrect: false, rationale: 'ต้องเว้นวรรคและใช้ elif' },
            { text: 'elif', isCorrect: true, rationale: 'elif ย่อมาจาก else if ใช้สำหรับตรวจสอบเงื่อนไขเพิ่มเติม' }
        ]
    },
    {
        question: 'คำสั่งใดที่ใช้ในการหยุดการทำงานของลูป (Loop) ทันที?',
        options: [
            { text: 'skip', isCorrect: false, rationale: 'skip ไม่ใช่คีย์เวิร์ดที่ถูกต้อง' },
            { text: 'continue', isCorrect: false, rationale: 'continue ใช้เพื่อข้ามรอบปัจจุบันของลูปไปยังรอบถัดไป' },
            { text: 'break', isCorrect: true, rationale: 'break ใช้เพื่อออกจากลูปปัจจุบันทันที' },
            { text: 'exit', isCorrect: false, rationale: 'exit ใช้เพื่อจบการทำงานของโปรแกรมทั้งหมด (มักใช้ในโมดูล sys)' }
        ]
    },
    {
        question: 'ผลลัพธ์ของ `print(type("Hello"))` คืออะไร?',
        options: [
            { text: '<class \'int\'>', isCorrect: false, rationale: 'Hello เป็นข้อความ ไม่ใช่จำนวนเต็ม' },
            { text: '<class \'float\'>', isCorrect: false, rationale: 'Hello เป็นข้อความ ไม่ใช่จำนวนทศนิยม' },
            { text: '<class \'str\'>', isCorrect: true, rationale: 'Hello เป็นข้อมูลชนิดข้อความ (string) ใน Python' },
            { text: '<class \'list\'>', isCorrect: false, rationale: 'Hello เป็นข้อความ ไม่ใช่รายการ (list)' }
        ]
    },
    {
        question: 'ในการสร้าง Dictionary ว่างเปล่า ต้องใช้สัญลักษณ์ใด?',
        options: [
            { text: '[]', isCorrect: false, rationale: '[] ใช้สำหรับสร้าง List ว่างเปล่า' },
            { text: '()', isCorrect: false, rationale: '() ใช้สำหรับสร้าง Tuple ว่างเปล่า' },
            { text: '{}', isCorrect: true, rationale: '{} ใช้สำหรับสร้าง Dictionary ว่างเปล่า' },
            { text: '<>', isCorrect: false, rationale: '<> ไม่ได้ใช้ในการสร้าง Dictionary' }
        ]
    },
    {
        question: 'เมื่อรันโค้ด `s = "Python"; print(s[1:4])` ผลลัพธ์ที่ได้คืออะไร?',
        options: [
            { text: 'ytho', isCorrect: false, rationale: 'ดัชนีเริ่มต้น 1 คือ y, ดัชนีสิ้นสุด 4 (ไม่รวม) คือ o ดังนั้นได้ yth' },
            { text: 'yth', isCorrect: true, rationale: 'Slicing [1:4] คือดัชนี 1 (y) ถึง 3 (h) โดยไม่รวม 4' },
            { text: 'Pyt', isCorrect: false, rationale: 'ดัชนี 1 คือ y, ไม่ใช่ P' },
            { text: 'thon', isCorrect: false, rationale: 'จะพิมพ์ thon ถ้าใช้ s[2:6]' }
        ]
    },
    {
        question: 'ข้อใดคือวิธีที่ถูกต้องในการใส่ความคิดเห็น (Comment) แบบบรรทัดเดียวใน Python?',
        options: [
            { text: '// นี่คือความคิดเห็น', isCorrect: false, rationale: '// ใช้ในภาษา C++, Java แต่ไม่ใช่ Python' },
            { text: '-- นี่คือความคิดเห็น', isCorrect: false, rationale: '-- ไม่ได้ใช้เป็น Comment ใน Python' },
            { text: '# นี่คือความคิดเห็น', isCorrect: true, rationale: 'สัญลักษณ์ # ใช้ในการระบุความคิดเห็นแบบบรรทัดเดียวใน Python' },
            { text: '/* นี่คือความคิดเห็น */', isCorrect: false, rationale: '/* ... */ ใช้สำหรับ Comment แบบหลายบรรทัดในภาษาอื่น' }
        ]
    },
    {
        question: 'เมื่อรันโค้ด `x = 10; y = 5; print(x > 5 and y < 10)` ผลลัพธ์คืออะไร?',
        options: [
            { text: 'False', isCorrect: false, rationale: 'ทั้งสองเงื่อนไขเป็น True: $10 > 5$ คือ True, $5 < 10$ คือ True, True and True คือ True' },
            { text: '1', isCorrect: false, rationale: 'ผลลัพธ์ของ Boolean จะเป็น True หรือ False' },
            { text: 'True', isCorrect: true, rationale: 'เงื่อนไข $10 > 5$ เป็นจริง และเงื่อนไข $5 < 10$ เป็นจริง ดังนั้น True and True ได้ True' },
            { text: 'None', isCorrect: false, rationale: 'None ใช้สำหรับค่าว่าง ไม่ใช่ผลลัพธ์ของ Boolean' }
        ]
    },
    {
        question: 'ข้อใดคือชื่อตัวแปรที่ "ไม่ถูกต้อง" ตามกฎการตั้งชื่อใน Python?',
        options: [
            { text: 'my_variable', isCorrect: false, rationale: 'ถูกต้อง เพราะใช้ตัวอักษรและเครื่องหมาย underscore' },
            { text: 'variable101', isCorrect: false, rationale: 'ถูกต้อง เพราะมีตัวอักษรและตัวเลข' },
            { text: '1st_variable', isCorrect: true, rationale: 'ไม่ถูกต้อง เพราะชื่อตัวแปรใน Python ไม่สามารถเริ่มต้นด้วยตัวเลขได้' },
            { text: '_private_var', isCorrect: false, rationale: 'ถูกต้อง เพราะสามารถเริ่มต้นด้วย underscore ได้' }
        ]
    },
    {
        question: 'ฟังก์ชัน `range(5)` จะสร้างลำดับของตัวเลขใดบ้าง?',
        options: [
            { text: '1, 2, 3, 4, 5', isCorrect: false, rationale: 'range(n) จะเริ่มจาก 0 และสิ้นสุดที่ $n-1$' },
            { text: '0, 1, 2, 3, 4', isCorrect: true, rationale: 'range(5) คือ $0, 1, 2, 3, 4$ (ไม่รวม 5)' },
            { text: '0, 1, 2, 3, 4, 5', isCorrect: false, rationale: 'range(n) จะไม่รวมค่า n' },
            { text: '5', isCorrect: false, rationale: 'range(5) คือลำดับของตัวเลขหลายตัว' }
        ]
    },
    {
        question: 'ข้อใดคือวัตถุประสงค์หลักของการใช้โมดูล (Module) ใน Python?',
        options: [
            { text: 'ทำให้โปรแกรมช้าลงเพื่อการดีบัก', isCorrect: false, rationale: 'โมดูลถูกสร้างมาเพื่อจัดระเบียบและเพิ่มประสิทธิภาพการทำงาน' },
            { text: 'ทำให้โค้ดสั้นลงเพียงบรรทัดเดียว', isCorrect: false, rationale: 'ความยาวโค้ดไม่ใช่จุดประสงค์หลัก' },
            { text: 'จัดระเบียบโค้ดและนำโค้ดกลับมาใช้ใหม่ได้', isCorrect: true, rationale: 'โมดูลช่วยแบ่งโค้ดออกเป็นไฟล์ที่มีการจัดการที่ดีและสามารถนำฟังก์ชันต่างๆ กลับมาใช้ใหม่ได้' },
            { text: 'ซ่อนตัวแปรและฟังก์ชันทั้งหมดจากผู้ใช้', isCorrect: false, rationale: 'โมดูลถูกออกแบบมาเพื่อแบ่งปันการใช้งาน' }
        ]
    },
    {
        question: 'ถ้าต้องการรับข้อมูลจากผู้ใช้ผ่านทางคีย์บอร์ดใน Python ต้องใช้ฟังก์ชันใด?',
        options: [
            { text: 'get_input()', isCorrect: false, rationale: 'ฟังก์ชันนี้ไม่ได้มีอยู่ใน Python พื้นฐาน' },
            { text: 'read()', isCorrect: false, rationale: 'read() มักใช้สำหรับอ่านไฟล์' },
            { text: 'input()', isCorrect: true, rationale: 'ฟังก์ชัน input() ใช้เพื่อรับข้อมูลจากผู้ใช้' },
            { text: 'scanner()', isCorrect: false, rationale: 'scanner() มักใช้ในภาษา Java' }
        ]
    },
    {
        question: 'ชนิดข้อมูลที่จัดเก็บค่าแบบ True หรือ False ใน Python เรียกว่าอะไร?',
        options: [
            { text: 'String', isCorrect: false, rationale: 'String คือข้อความ' },
            { text: 'Integer', isCorrect: false, rationale: 'Integer คือจำนวนเต็ม' },
            { text: 'Boolean', isCorrect: true, rationale: 'Boolean (bool) คือชนิดข้อมูลที่เก็บได้เพียง True หรือ False' },
            { text: 'Float', isCorrect: false, rationale: 'Float คือจำนวนทศนิยม' }
        ]
    },
    {
        question: 'เมื่อรันโค้ด `my_list = [1, 2, 3]; my_list.append(4); print(my_list)` ผลลัพธ์ที่ได้คืออะไร?',
        options: [
            { text: '[1, 2, 3]', isCorrect: false, rationale: 'เมธอด append(4) จะเพิ่ม 4 เข้าไปใน list' },
            { text: '[4, 1, 2, 3]', isCorrect: false, rationale: 'append() จะเพิ่มสมาชิกที่ท้าย list' },
            { text: '[1, 2, 3, 4]', isCorrect: true, rationale: 'เมธอด append() จะเพิ่มสมาชิกที่ระบุไปยังส่วนท้ายของ list' },
            { text: 'Error', isCorrect: false, rationale: 'นี่คือการทำงานที่ถูกต้องของเมธอด list.append()' }
        ]
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(-1); 
let userName = '';
let studentId = '';
let userEmail = '';
const targetEmail = 'wanchatpookhuntod@gmail.com';

// ตัวแปรสำหรับตัวจับเวลาต่อข้อ (Stateful)
let timerInterval;
const TIME_PER_QUESTION = 30; // 30 วินาที
let scoreSummary = null; 
let isQuizSubmitted = false; 

// 🆕 ตัวแปรสถานะที่สำคัญ
// เก็บเวลาที่เหลือสำหรับแต่ละข้อ เริ่มต้นทั้งหมดที่ 30 วินาที
let timeRemaining = new Array(quizData.length).fill(TIME_PER_QUESTION);
// เก็บสถานะว่าข้อนั้นเวลาหมดแล้วหรือไม่
let isTimeExpired = new Array(quizData.length).fill(false);


// Elements (ดึงค่า Element จาก ID)
const formScreen = document.getElementById('form-screen');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQNumberElement = document.getElementById('current-q-number');
const prevBtn = document.getElementById('prev-btn'); 
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const scoreDisplay = document.getElementById('score-display');
const feedbackMessage = document.getElementById('feedback-message');
const copyMessage = document.getElementById('copy-message');
const timeLeftDisplay = document.getElementById('time-left'); 
const detailResultList = document.getElementById('detail-result-list'); 

// ----------------------------------------------------------------------
// ⚡️ ฟังก์ชันควบคุมตัวจับเวลา (Timer Controls)
// ----------------------------------------------------------------------

function startTimer() {
    // 1. ตรวจสอบ: ถ้าข้อนี้เวลาหมดแล้ว ไม่ต้องเริ่ม Timer
    if (isTimeExpired[currentQuestionIndex]) {
        if (timeLeftDisplay) {
             timeLeftDisplay.textContent = '0';
             timeLeftDisplay.classList.add('text-gray-500'); // แสดงเป็นสีเทา
        }
        return;
    }
    
    // 2. โหลดเวลาที่เหลือจากสถานะ
    let timeLeft = timeRemaining[currentQuestionIndex];

    if (timeLeftDisplay) {
        timeLeftDisplay.textContent = timeLeft;
        timeLeftDisplay.classList.remove('text-red-800', 'text-gray-500'); 
    }
    
    // เคลียร์ Timer เก่าก่อนเริ่มใหม่
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        // 3. บันทึกเวลาที่เหลือกลับไปยังสถานะของข้อนั้นๆ
        timeRemaining[currentQuestionIndex] = timeLeft;

        if (timeLeftDisplay) {
            timeLeftDisplay.textContent = timeLeft;
            // ไฮไลต์เมื่อเวลาน้อย
            if (timeLeft <= 5) {
                timeLeftDisplay.classList.add('text-red-800');  
            }
        }

        if (timeLeft <= 0) {
            stopTimer();
            autoAdvance(); // ข้ามข้ออัตโนมัติเมื่อเวลาหมด
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    if (timeLeftDisplay) {
        timeLeftDisplay.classList.remove('text-red-800');
    }
}

function autoAdvance() {
    // 1. บันทึกสถานะว่าข้อนี้เวลาหมด
    isTimeExpired[currentQuestionIndex] = true;
    
    // 2. ค้นหาข้อถัดไปที่เวลาไม่หมด (หรือข้อสุดท้าย)
    let nextIndex = currentQuestionIndex + 1;
    let foundNext = false;

    while (nextIndex < quizData.length) {
        if (!isTimeExpired[nextIndex]) {
            currentQuestionIndex = nextIndex;
            foundNext = true;
            break;
        }
        nextIndex++;
    }

    // 3. จัดการการนำทาง
    if (foundNext) {
        loadQuestion();
    } else {
        // ถ้าหาข้อที่เวลาไม่หมดไม่เจอ หรือถึงข้อสุดท้ายแล้ว
        submitQuiz();
    }
}

// ----------------------------------------------------------------------
// 🚀 ฟังก์ชันการนำทางและเริ่มต้น (Navigation & Start)
// ----------------------------------------------------------------------

function startQuiz(event) {
    event.preventDefault(); 
    
    if (isQuizSubmitted) return; 

    // ดึงข้อมูลจากฟอร์ม
    userName = document.getElementById('user-name').value.trim();
    studentId = document.getElementById('student-id').value.trim();
    userEmail = document.getElementById('user-email').value.trim();

    if (userName && studentId && userEmail) {
        // สลับไปหน้าจอแบบทดสอบ
        formScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        loadQuestion(); 
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
}

function loadQuestion() {
    if (isQuizSubmitted) return; 
    
    // 1. ตรวจสอบ: ถ้าข้อปัจจุบันเวลาหมด ห้ามโหลด (ควรถูกกรองใน autoAdvance/next/prev แล้ว แต่เพื่อความชัวร์)
    if (isTimeExpired[currentQuestionIndex]) {
        // หาข้อถัดไปที่ยังไม่หมดเวลา (ใช้ Logic คล้าย autoAdvance)
        // เพื่อป้องกันบั๊กหากเรียก loadQuestion() โดยตรงจากปุ่ม
        autoAdvance();
        return;
    }

    stopTimer(); // หยุดตัวจับเวลาของข้อก่อนหน้า
    startTimer(); // เริ่มตัวจับเวลาใหม่ (จะเริ่มนับต่อจาก timeRemaining)

    const q = quizData[currentQuestionIndex];
    currentQNumberElement.textContent = currentQuestionIndex + 1;
    questionTextElement.textContent = q.question;
    optionsContainer.innerHTML = ''; 

    // สร้างปุ่มตัวเลือก
    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.className = 'w-full text-left p-4 rounded-lg border-2 border-gray-200 bg-white hover:bg-indigo-50 hover:border-indigo-400 transition duration-200 text-gray-700 font-medium shadow-sm';
        button.setAttribute('data-index', index);
        button.onclick = () => selectAnswer(index);

        // แสดงสถานะที่เลือก
        if (userAnswers[currentQuestionIndex] === index) {
            button.classList.add('bg-indigo-100', 'border-indigo-500', 'ring-2', 'ring-indigo-500');
        }

        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
    copyMessage.textContent = ''; 
}

function selectAnswer(selectedIndex) {
    if (isQuizSubmitted) return;
    if (isTimeExpired[currentQuestionIndex]) return; // ห้ามเลือกถ้าเวลาหมด

    userAnswers[currentQuestionIndex] = selectedIndex;
    
    optionsContainer.querySelectorAll('button').forEach((button, index) => {
        button.classList.remove('bg-indigo-100', 'border-indigo-500', 'ring-2', 'ring-indigo-500');
        if (index === selectedIndex) {
            button.classList.add('bg-indigo-100', 'border-indigo-500', 'ring-2', 'ring-indigo-500');
        }
    });

    // ตรวจสอบว่าพร้อมจะแสดงปุ่มส่งคำตอบหรือไม่ (ถ้าอยู่ข้อสุดท้าย)
    if (currentQuestionIndex === quizData.length - 1) {
        submitBtn.classList.remove('hidden');
    }
}

function updateNavigationButtons() {
    // ปุ่ม Submit
    if (currentQuestionIndex === quizData.length - 1) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }

    // ปุ่ม Next
    if (currentQuestionIndex < quizData.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.add('hidden');
    }
    
    // ปุ่ม Previous
    if (currentQuestionIndex > 0) {
        // อนุญาตให้ย้อนกลับถ้าข้อปัจจุบันไม่ใช่ข้อแรก
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }
}

function prevQuestion() {
    if (isQuizSubmitted) return;
    
    if (currentQuestionIndex > 0) {
        let prevIndex = currentQuestionIndex - 1;
        // 1. ค้นหาข้อก่อนหน้าสุดที่เวลายังไม่หมด
        while (prevIndex >= 0) {
            if (!isTimeExpired[prevIndex]) {
                currentQuestionIndex = prevIndex;
                loadQuestion();
                return;
            }
            prevIndex--;
        }
    }
    // ถ้าวนหาแล้วไม่เจอข้อที่เวลายังไม่หมด (ซึ่งไม่น่าจะเกิดขึ้นถ้าเพิ่งเริ่ม)
    // หรืออยู่ที่ข้อ 0 อยู่แล้ว จะไม่ทำอะไร
}

function nextQuestion() {
    if (isQuizSubmitted) return;
    
    if (currentQuestionIndex < quizData.length - 1) {
        // 1. ตรวจสอบว่าข้อปัจจุบันเวลาหมดแล้วหรือไม่
        if (isTimeExpired[currentQuestionIndex]) {
            // ถ้าหมดแล้ว ใช้ autoAdvance เพื่อข้ามไปข้อถัดไปที่เวลายังไม่หมด
            autoAdvance();
            return;
        }

        stopTimer(); // หยุดตัวจับเวลาของข้อปัจจุบันก่อนย้าย
        
        let nextIndex = currentQuestionIndex + 1;
        // 2. ค้นหาข้อถัดไปที่เวลายังไม่หมด
        while (nextIndex < quizData.length) {
            if (!isTimeExpired[nextIndex]) {
                currentQuestionIndex = nextIndex;
                loadQuestion();
                return;
            }
            nextIndex++;
        }
    }
    
    // ถ้าถึงข้อสุดท้าย หรือหาข้อถัดไปที่เวลายังไม่หมดไม่เจอ
    submitQuiz();
}

// ----------------------------------------------------------------------
// ✅ ฟังก์ชันการส่งคำตอบและผลลัพธ์ (Submit & Results)
// ----------------------------------------------------------------------

function submitQuiz() {
    if (isQuizSubmitted) return;

    stopTimer(); 
    isQuizSubmitted = true; 

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    
    // คำนวณคะแนนและสรุปผล
    scoreSummary = []; 
    for (let i = 0; i < quizData.length; i++) {
        const selectedIndex = userAnswers[i];
        
        // ถ้าเวลาหมด (isTimeExpired) หรือผู้ใช้ไม่ได้เลือก (-1) ถือว่า 'ไม่ตอบ' หรือ 'ผิด' ขึ้นอยู่กับว่าเลือกอะไร
        // ในโค้ดนี้เราถือตามคำตอบที่เลือก (selectedIndex) ถ้าเป็น -1 คือไม่ตอบ
        const isCorrect = selectedIndex !== -1 && quizData[i].options[selectedIndex].isCorrect;
        
        let status = 'ไม่ตอบ';
        if (selectedIndex !== -1) {
            if (isCorrect) {
                status = 'ถูกต้อง';
                score++;
                correctCount++;
            } else {
                status = 'ผิด';
                wrongCount++;
            }
        } else {
            // ถือว่าไม่ตอบ
            unattemptedCount++;
        }
        
        scoreSummary.push({
            questionNumber: i + 1,
            userAnswerIndex: selectedIndex,
            correctAnswer: quizData[i].options.findIndex(opt => opt.isCorrect),
            status: status
        });
    }

    // แสดงผลลัพธ์
    scoreDisplay.textContent = `${score} / ${quizData.length}`;
    
    let feedback = '';
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) {
        feedback = 'ยอดเยี่ยม! คุณทำได้สมบูรณ์แบบ แสดงว่าพื้นฐาน Python ของคุณแข็งแกร่งมาก';
    } else if (percentage >= 70) {
        feedback = 'ทำได้ดีมาก! ความเข้าใจใน Python ของคุณอยู่ในระดับที่ดี ลองทบทวนข้อที่พลาดเล็กน้อยเพื่อความสมบูรณ์แบบ';
    } else if (percentage >= 40) {
        feedback = 'ทำได้ดีแล้ว! คุณมีพื้นฐานบางส่วนแล้ว แต่ควรใช้เวลาทบทวนแนวคิดหลักๆ อีกครั้ง';
    } else {
        feedback = 'เป็นกำลังใจให้ครับ! นี่เป็นจุดเริ่มต้นที่ดีในการเรียนรู้ Python ลองทบทวนข้อมูลพื้นฐานและลองทำอีกครั้ง';
    }
    feedbackMessage.textContent = feedback;
    
    // แสดงข้อมูลผู้เข้าสอบในหน้าสรุป
    document.getElementById('summary-name').textContent = `ชื่อ: ${userName}`;
    document.getElementById('summary-id').textContent = `รหัส: ${studentId}`;
    document.getElementById('summary-email').textContent = `อีเมล: ${userEmail}`;
    // เนื่องจาก HTML นี้ไม่มี ID เหล่านี้แล้ว จึงถูกคอมเมนต์ออกไป:
    // document.getElementById('summary-correct').textContent = `ถูกต้อง: ${correctCount} ข้อ`;
    // document.getElementById('summary-wrong').textContent = `ผิด: ${wrongCount} ข้อ`;
    // document.getElementById('summary-unattempted').textContent = `ไม่ตอบ: ${unattemptedCount} ข้อ`;
    
    // แสดงรายละเอียดผลลัพธ์ (ถ้ามี detail-result-list ใน HTML)
    // renderDetailedResults(); // หากต้องการใช้ ต้องเพิ่ม detail-result-list ใน HTML

    // ซ่อนหน้าจอแบบทดสอบและแสดงหน้าจอผลลัพธ์
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    // เพิ่ม animation effect ให้ผลลัพธ์
    setTimeout(() => {
        resultScreen.classList.remove('scale-95', 'opacity-0');
    }, 50);
}

// ----------------------------------------------------------------------
// 🔄 ฟังก์ชันเพิ่มเติม (Restart & Copy) - (ใช้ Logic เดิม)
// ----------------------------------------------------------------------

function copyResultsToClipboard() {
    if (!scoreSummary) {
        copyMessage.textContent = 'ไม่พบผลลัพธ์ที่จะคัดลอก';
        return;
    }

    let summaryText = `--- ผลสรุปแบบทดสอบ Python พื้นฐาน ---\n`;
    summaryText += `ชื่อ: ${userName}\n`;
    summaryText += `รหัส: ${studentId}\n`;
    summaryText += `อีเมล: ${userEmail}\n`;
    summaryText += `คะแนนรวม: ${scoreDisplay.textContent}\n`;
    summaryText += `------------------------------------\n`;

    scoreSummary.forEach((item, index) => {
        const q = quizData[index];
        const userAnswerText = item.userAnswerIndex !== -1 ? q.options[item.userAnswerIndex].text : 'ไม่ตอบ';
        const correctAnswerText = q.options[item.correctAnswer].text;
        
        summaryText += `\n[ข้อ ${item.questionNumber}] สถานะ: ${item.status}\n`;
        summaryText += `คำถาม: ${q.question}\n`;
        summaryText += `คำตอบของคุณ: ${userAnswerText}\n`;
        if (item.status !== 'ถูกต้อง') {
            summaryText += `คำตอบที่ถูกต้อง: ${correctAnswerText}\n`;
            summaryText += `เหตุผล: ${q.options[item.correctAnswer].rationale}\n`;
        }
    });

    navigator.clipboard.writeText(summaryText).then(() => {
        copyMessage.textContent = '✅ คัดลอกผลลัพธ์ไปยังคลิปบอร์ดแล้ว';
    }).catch(err => {
        copyMessage.textContent = '❌ ไม่สามารถคัดลอกได้: ' + err;
    });
}

function sendResultsByMailto() {
    if (!scoreSummary) return;

    let emailBody = 'เรียน อาจารย์/ผู้ดูแลระบบ%0A%0A';
    emailBody += 'ผลการสอบแบบทดสอบ Python พื้นฐานของข้าพเจ้า มีดังนี้:%0A%0A';
    emailBody += `ชื่อ: ${userName}%0A`;
    emailBody += `รหัส: ${studentId}%0A`;
    emailBody += `อีเมล: ${userEmail}%0A`;
    emailBody += `คะแนนรวม: ${scoreDisplay.textContent}%0A%0A`;

    scoreSummary.forEach((item, index) => {
        const q = quizData[index];
        const userAnswerText = item.userAnswerIndex !== -1 ? q.options[item.userAnswerIndex].text : 'ไม่ตอบ';
        
        emailBody += `[ข้อ ${item.questionNumber}] ${item.status}:%0A`;
        emailBody += `คำถาม: ${q.question.replace(/&/g, '%26')}%0A`;
        emailBody += `คำตอบของคุณ: ${userAnswerText.replace(/&/g, '%26')}%0A%0A`;
    });

    const subject = `ผลสอบ Python: ${userName} (${studentId})`;
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
    
    window.open(mailtoLink, '_blank');
}


function restartQuiz() {
    stopTimer(); 
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(-1); 
    scoreSummary = null; 
    isQuizSubmitted = false; 
    
    // 🆕 รีเซ็ตสถานะเวลา
    timeRemaining = new Array(quizData.length).fill(TIME_PER_QUESTION);
    isTimeExpired = new Array(quizData.length).fill(false); 
    
    // ล้างข้อมูลผู้เข้าสอบในฟอร์ม
    document.getElementById('user-name').value = '';
    document.getElementById('student-id').value = '';
    document.getElementById('user-email').value = '';

    // สลับหน้าจอ
    resultScreen.classList.add('hidden', 'scale-95', 'opacity-0');
    quizScreen.classList.add('hidden');
    formScreen.classList.remove('hidden');
    
    // รีเซ็ตข้อความสถานะ
    copyMessage.textContent = '';
}
