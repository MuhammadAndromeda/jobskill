function DigitalOnline() {
    localStorage.setItem("courseTitle", "Digital Online Marketing");
    localStorage.setItem("courseBanner", "../assets/images/digital-online.png");
}

function SosmedMarketing() {
    localStorage.setItem("courseTitle", "Social Media Marketing");
    localStorage.setItem("courseBanner", "../assets/images/sosmed-marketing.png");
}

function MarketingOffice() {
    localStorage.setItem("courseTitle", "Digital Online Marketing");
    localStorage.setItem("courseBanner", "../assets/images/marketing-office.png");
}

function contentLoaded() {
    const title = document.getElementById("courseTitle");
    const banner = document.getElementById("courseBanner");
    const desc = document.getElementById("courseDescription");
    const sylabus = document.getElementById("courseSylabus");

    const savedTitle = localStorage.getItem("courseTitle");
    const savedBanner = localStorage.getItem("courseBanner");
    const savedDesc = localStorage.getItem("courseDescription");
    const savedSylabus = localStorage.getItem("courseSylabus");

    title.innerText = savedTitle;
    banner.src = savedBanner;
    desc.src = savedDesc;
    sylabus.src = savedSylabus;
}