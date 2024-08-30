function log_out() {
    confirm("ARE YOU SURE TO LOG-OUT");
    window.close();
}
function profile() {
    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let img = document.createElement("img");
        let ul = document.createElement("ul");
        let p = document.createElement("p");
        div.style.maxHeight = '100vh';
        div.setAttribute("style", "display:flex;flex-direction:column;");
        img.setAttribute("style", "width:50vmin; height:auto; border:1vb solid white; margin-left:10%;border-radius:100%; box-shadow:1vb 1vb 2vb red;");
        p.setAttribute("style", " color:;font-size:1.5em; font-weight:900;font-family:sans-serif;");
        // div.style.marginLeft="100%";
        img.src = "RESUME-MATERIAL/Me.png";
        img.alt = "miss";
        img.style.margin = "0 auto";
        img.style.display = "block";
        p.innerText = "SUMIT KUMAR";
        ul.setAttribute("style", "font-size:1.5em; font-weight:600;font-family:sans-serif;");
        ul.innerHTML = `
        <li>ABOUT MYSELF:</li>
        <ul>
        <li>LIVED IN PANIPAT , HARYANA</li>
        <li>ARYA PG COLLEGE,PNP</li>
        <li>Current Status: Final-year BCA student</li>
        <li>WON 1ST , 2ND AND 3RD POSITION IN ZERONEK24</li>
        <li>NSS VOLUNTEER IN COLLEGE TIME</li>
        <li>NCC CADET DURING SCHOOL TIME</li>
        <li>BOTH NSS AND NCC DEVELOPED MY CHARACTER</li>
        </ul>
        <li>Objective: Eager to apply my skills to real-world projects and continue growing in the tech field</li>
    `;
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(ul);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function education() {
    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        ul.setAttribute("style", "font-size:1.5em; font-weight:600;font-family:sans-serif;");
        ul.innerHTML = `
            <li>Current Status: Final-year BCA student</li>
            <li>Skills:</li>
            <ul>
                <li>Web Development: HTML, CSS, JavaScript</li>
                <li>Programming Languages: C++, Python</li>
                <li>Database Management: SQL</li>
                <li>Data Structures & Algorithms: Experienced</li>
                <li>LEETCODE PROBLEM SOLVER: 40 Questions</li>
                <li>Passion: Crafting innovative solutions and solving complex problems</li>
            </ul>
            <li>Objective: Eager to apply my skills to real-world projects and continue growing in the tech field</li>
        `;
        div.appendChild(ul);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function map() {
    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        let p = document.createElement("p");
        p.setAttribute("style", " color:yellow;font-size:1.5em; font-weight:900;font-family:sans-serif;");
        p.innerText = "V.P.O Mor-Majra District Karnal Tehsil Ballah Karnal 132046 Haryana India";
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111235.35875960253!2d76.88171822000912!3d29.396485427738956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda457afbe651%3A0x41d3f6feacaa74d4!2sPanipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1722006941851!5m2!1sen!2sin";
        iframe.setAttribute("style", "width:85vw; height:85vh;");
        iframe.allowFullscreen = "";
        div.appendChild(p);
        div.appendChild(iframe);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function college() {
    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let ul = document.createElement("ul");
        let ul2 = document.createElement("ul");
        let ul3 = document.createElement("ul");
        let img = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        div.setAttribute("style", "display:flex; flex-direction:column;");
        img.setAttribute("style", "width:70%; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:1vb 1vb 2vb red;");
        img2.setAttribute("style", "width:70%; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:1vb 1vb 2vb red;");
        img3.setAttribute("style", "width:70%; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:1vb 1vb 2vb red;");
        // div.style.marginLeft="100%";
        img.src = "RESUME-MATERIAL/college.jpeg";
        img.alt = "miss";
        img.style.margin = "0 auto";
        img.style.display = "block";
        img2.src = "RESUME-MATERIAL/bca.jpeg";
        img2.alt = "miss";
        img2.style.margin = "0 auto";
        img2.style.display = "block";
        img3.src = "RESUME-MATERIAL/CodeQuotient.jpg";
        img3.alt = "miss";
        img3.style.margin = "0 auto";
        img3.style.display = "block";
        p.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        p.innerText = "ABOUT Arya PG College";
        ul.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        ul.innerHTML = `
            <li>Arya PG College:</li>
            <ul>
                <li>Located in Panipat, Haryana</li>
                <li>Established in 1958</li>
                <li>Affiliated to Kurukshetra University</li>
                <li>Recognized by UGC and NAAC Accredited</li>
            </ul>
            <li>Academic Programs:</li>
            <ul>
                <li>Undergraduate courses in Arts, Science, and Commerce</li>
                <li>Postgraduate courses in various disciplines</li>
                <li>Professional courses like BCA, BBA, and MCA</li>
            </ul>
            <li>Infrastructure:</li>
            <ul>
                <li>Spacious classrooms and laboratories</li>
                <li>Well-stocked library and reading room</li>
                <li>Sports facilities and playgrounds</li>
                <li>Hostel facilities for boys and girls</li>
            </ul>
            <li>Co-Curricular Activities:</li>
            <ul>
                <li>NSS and NCC units</li>
                <li>Cultural and literary societies</li>
                <li>Sports and games competitions</li>
            </ul>`;
        p2.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        p2.innerHTML = "ABOUT BCA DEPARTEMENT";
        ul2.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        ul2.innerHTML = `
          <li>BCA Requirement:</li>
          <ul>
            <li>Duration: 3 years</li>
            <li>Eligibility: 10+2 with Mathematics and Computer Science</li>
          </ul>
          <li>Course Structure:</li>
          <ul>
            <li>First Year: Computer Fundamentals, Programming in C, Data Structures, etc.</li>
            <li>Second Year: Computer Organization, Operating Systems, Database Management Systems, etc.</li>
            <li>Third Year: Software Engineering, Web Development, Networking, etc.</li>
          </ul>
          <li>Career Opportunities:</li>
          <ul>
            <li>Software Developer</li>
            <li>Web Developer</li>
            <li>Database Administrator</li>
            <li>Network Administrator</li>
          </ul>
        `;
        p3.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        p3.innerHTML = "ABOUT CodeQuotient COMPANY";
        ul3.setAttribute("style", "font-size:1.5em; font-weight:900;font-family:sans-serif;");
        ul3.innerHTML = `
            <li>My Experience with CodeQuotient:</li>
          <ul>
            <li>I have been a part of CodeQuotient's coding community and have gained valuable skills and knowledge in programming.</li>
            <li>I have participated in coding challenges and hackathons, which have helped me to improve my coding skills and think creatively.</li>
            <li>CodeQuotient's resources and mentorship have been instrumental in my growth as a programmer and have given me the confidence to pursue a career in tech.</li>
            <li>I appreciate the opportunities CodeQuotient has provided me to learn from industry experts and to work on real-world projects.</li>
            <li>I am grateful for the support and guidance I have received from the CodeQuotient team and look forward to continuing my learning journey with them.</li>
          </ul>`;
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(ul);
        div.appendChild(img2);
        div.appendChild(p2);
        div.appendChild(ul2);
        div.appendChild(img3);
        div.appendChild(p3);
        div.appendChild(ul3);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function contact() {
    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let form = document.createElement("form");
        form.setAttribute("style", "display:flex; flex-direction:column; font-size:2vw;");
        let emailLabel = document.createElement("label");
        emailLabel.innerText = "Email ID";
        let emailInput = document.createElement("input");
        emailInput.setAttribute("style", "color:red; font-weight:900;");
        emailInput.type = "email";
        emailInput.placeholder = "Enter your email";
        let numberLabel = document.createElement("label");
        numberLabel.innerText = "Mobile Number";
        let numberInput = document.createElement("input");
        numberInput.setAttribute("style", "color:red; font-weight:900;");
        numberInput.type = "number";
        numberInput.placeholder = "Enter your mobile number";
        let submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.innerText = "Submit";
        submitButton.setAttribute("style", "background-color:grey;font-weight:900;");
        let resetButton = document.createElement("button");
        resetButton.type = "reset";
        resetButton.innerText = "Reset";
        resetButton.setAttribute("style", "background-color:grey;font-weight:900;");
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(numberLabel);
        form.appendChild(numberInput);
        form.appendChild(submitButton);
        form.appendChild(resetButton);
        div.appendChild(form);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function project() {

    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        div.setAttribute("style", "display:flex; flex-direction:column; ");
        let project1Link = document.createElement("a");
        project1Link.href = "/WEB DEV/PROJECT 2 RPS/GAME.html";
        project1Link.target = "_blank";
        project1Link.innerText = "ROCK PAPER SCISSOR";
        let project2Link = document.createElement("a");
        project2Link.href = "/WEB DEV/PROJECT 4 TO-DO/TO_DO.HTML";
        project2Link.target = "_blank";
        project2Link.innerText = "TO-DO WEBSITE";
        let project3Link = document.createElement("a");
        project3Link.href = "/WEB DEV/PROJECT 1 AMAZON/INDEX.html";
        project3Link.target = "_blank";
        project3Link.innerText = "AMAZON-CLONE";
        img1.setAttribute("style", "width:20vmax; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:2vb 2vb 2vb grey;");
        img2.setAttribute("style", "width:20vmax; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:2vb 2vb 2vb grey;");
        img3.setAttribute("style", "width:20vmax; height: auto; border:1vb solid white; margin-left:10%;border-radius:5vb; box-shadow:2vb 2vb 2vb grey;");
        img1.src = "RESUME-MATERIAL/Rock-Paper-Scissor.webp";
        img1.alt = "miss";
        img1.style.margin = "0 auto";
        img1.style.display = "block";
        img2.src = "RESUME-MATERIAL/to-do.jpg";
        img2.alt = "miss";
        img2.style.margin = "0 auto";
        img2.style.display = "block";
        img3.src = "RESUME-MATERIAL/amazon.webp";
        img3.alt = "miss";
        img3.style.margin = "0 auto";
        img3.style.display = "block";
        div1.appendChild(img1);
        div1.appendChild(project1Link);
        div2.appendChild(img2);
        div2.appendChild(project2Link);
        div3.appendChild(img3);
        div3.appendChild(project3Link);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        showElement.appendChild(div);
    } else {
        console.error("Element with id 'show' not found");
    }
}
function resume() {

    let showElement = document.getElementById("show");
    if (showElement) {
        showElement.innerHTML = "";
        let div = document.createElement("div");
        let img = document.createElement("img");
        let a1 = document.createElement("a");
        let a2 = document.createElement("a");
        div.setAttribute("style", "display:flex; flex-direction:column;");
        img.setAttribute("style", "width:20vw; height: auto; border:1vb solid white; border-radius:5vb; box-shadow:2vb 2vb 2vb grey; margin-bottom:1vmax;");
        img.src = "RESUME-MATERIAL/Resume_pages.jpg";
        img.addEventListener("mouseout", function () {
            this.style.webkitFilter = "invert(0%)";
            this.style.filter = "invert(0%)";
        });
        img.addEventListener("mouseover", function () {
            this.style.webkitFilter = "invert(100%)";
            this.style.filter = "invert(100%)";
        });
        a1.href = "RESUME-MATERIAL/My Resume.pdf";
        a1.download = "";
        a1.innerText = "DOWNLOAD MY RESUME";
        a2.href = "RESUME-MATERIAL/My Resume.pdf";
        a2.innerText = "PRINT MY RESUME";
        div.appendChild(img);
        div.appendChild(a1);
        div.appendChild(a2);
        showElement.appendChild(div);
    }
}