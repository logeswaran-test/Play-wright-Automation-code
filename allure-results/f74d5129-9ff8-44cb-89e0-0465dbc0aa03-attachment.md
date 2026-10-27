# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Frames.spec.js >> Nested Frames Hyrtutorilas
- Location: tests\Frames.spec.js:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#frm3').contentFrame().locator('#frm2').contentFrame().getByPlaceholder('Enter First Name')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic:
          - generic:
            - list:
              - listitem [ref=e6]:
                - link "" [ref=e7] [cursor=pointer]:
                  - /url: https://www.facebook.com/HYRTutorials/
              - listitem [ref=e8]:
                - link "" [ref=e9] [cursor=pointer]:
                  - /url: https://twitter.com/hyrtutorials
              - listitem [ref=e10]:
                - link "" [ref=e11] [cursor=pointer]:
                  - /url: https://github.com/YadaGiriReddy/
              - listitem [ref=e12]:
                - link "" [ref=e13] [cursor=pointer]:
                  - /url: https://www.instagram.com/hyrtutorials/
              - listitem [ref=e14]:
                - link "" [ref=e15] [cursor=pointer]:
                  - /url: https://www.linkedin.com/company/hyrtutorials/
              - listitem [ref=e16]:
                - link "" [ref=e17] [cursor=pointer]:
                  - /url: https://www.youtube.com/hyrtutorials
      - list [ref=e23]:
        - listitem [ref=e24]:
          - generic [ref=e25]: 
          - text: Oct 27, 2026
        - listitem [ref=e26]:
          - link "Home" [ref=e27] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com
        - listitem [ref=e28]:
          - link "Contact" [ref=e29] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/p/contactus.html
    - generic [ref=e31]:
      - link [ref=e36] [cursor=pointer]:
        - /url: https://www.hyrtutorials.com/
        - img "HYR" [ref=e37]
      - insertion [ref=e42]:
        - generic [ref=e44]:
          - generic "These are topics related to the article that might interest you" [ref=e45]: Discover more
          - link "Inline frame tutorial" [ref=e46] [cursor=pointer]
          - link "Web automation tools" [ref=e50] [cursor=pointer]
          - link "Frames practice exercises" [ref=e54] [cursor=pointer]
          - link "Website testing methods" [ref=e58] [cursor=pointer]
          - link "Automation testing guide" [ref=e62] [cursor=pointer]
          - link "Test automation services" [ref=e66] [cursor=pointer]
    - generic [ref=e71]:
      - listitem [ref=e72]:
        - link " Home" [ref=e73] [cursor=pointer]:
          - /url: https://www.hyrtutorials.com/
          - generic [ref=e74]: 
          - text: Home
      - list [ref=e77]:
        - listitem [ref=e78]:
          - link "Tech News" [ref=e79] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/TechNews
        - listitem [ref=e80]:
          - link "Tutorials " [ref=e81] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/Tutorials
        - listitem [ref=e82]:
          - link "YouTube Courses " [ref=e83] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e84]:
          - link "Selenium Practice " [ref=e85] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e86]:
          - link "Contact" [ref=e87] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/p/contactus.html
    - generic [ref=e88]:
      - generic [ref=e95]:
        - heading "Frames Practice" [level=1] [ref=e98]
        - article [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]: "This page is used for practicing iframes in web automation. We have three types of frames in web applications, those are:"
            - list [ref=e103]:
              - listitem [ref=e104]:
                - text: frame - The
                - generic [ref=e105]: <frame>
                - text: tag was used in HTML 4 to define one particular window (frame) within a
                - generic [ref=e106]: <frameset>
                - text: .
              - listitem [ref=e107]:
                - text: frameset - The
                - generic [ref=e108]: <frameset>
                - text: tag was used in HTML 4 to define a frameset.
              - listitem [ref=e109]:
                - text: iframe - The
                - generic [ref=e110]: <iframe>
                - text: tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.
            - generic [ref=e111]: Out of these, frame and frameset were no longer being supported in HTML 5. Below we have three frames to practice.
            - generic [ref=e112]:
              - generic [ref=e113]:
                - paragraph [ref=e114]
                - paragraph [ref=e115]:
                  - text: This textbox is used for entering the text after switching back from frames.
                  - link "Frames practice exercises" [ref=e116] [cursor=pointer]
                - textbox [ref=e120]
              - generic [ref=e121]:
                - heading "Frame1:" [level=3] [ref=e122]
                - iframe [ref=e123]: <p>Your browser does not support iframes.</p>
              - generic [ref=e124]:
                - heading "Frame2:" [level=3] [ref=e125]
                - iframe [ref=e126]: <p>Your browser does not support iframes.</p>
              - generic [ref=e127]:
                - heading "Frame3:" [level=3] [ref=e128]
                - iframe [ref=e129]: <p>Your browser does not support iframes.</p>
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]:
            - heading "Support My Work" [level=2] [ref=e136]
            - link "Buy me a coffee" [ref=e139] [cursor=pointer]:
              - /url: https://buymeacoffee.com/yadagirireddy
          - generic [ref=e155]:
            - heading "Subscribe to YouTube channels" [level=2] [ref=e157]
            - generic [ref=e158]:
              - iframe [ref=e160]:
                - generic [ref=f18e2]:
                  - link:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                    - generic [ref=f18e3] [cursor=pointer]
                  - link "H Y R Tutorials" [ref=f18e7] [cursor=pointer]:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                  - generic [ref=f18e8]:
                    - button "YouTube" [ref=f18e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f18e11]
                    - button "74K" [ref=f18e12]
              - iframe [ref=e162]:
                - generic [ref=f19e2]:
                  - link:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                    - generic [ref=f19e3] [cursor=pointer]
                  - link "H Y R Tutorials - Telugu" [ref=f19e7] [cursor=pointer]:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                  - generic [ref=f19e8]:
                    - button "YouTube" [ref=f19e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f19e11]
                    - button "157K" [ref=f19e12]
          - generic [ref=e163]:
            - heading "Telegram" [level=2] [ref=e165]
            - link "Join Telegram Channel" [ref=e167] [cursor=pointer]:
              - /url: https://xn--r1a.click/hyrtutorials
          - heading "Facebook" [level=2] [ref=e173]
          - generic [ref=e177]:
            - heading "Twitter" [level=2] [ref=e179]
            - link "Follow @hyrtutorials" [ref=e181] [cursor=pointer]:
              - /url: https://twitter.com/hyrtutorials?ref_src=twsrc%5Etfw
          - insertion [ref=e183]:
            - generic [ref=e186]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e188]: Discover more
              - link "HTML tutorial" [ref=e189] [cursor=pointer]
              - link "HTML document embedding" [ref=e194] [cursor=pointer]
              - link "Java programming courses" [ref=e199] [cursor=pointer]
        - generic [ref=e204]:
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link "Popular" [ref=e207] [cursor=pointer]:
                - /url: "#tabside1"
            - listitem [ref=e208]:
              - link "Recent" [ref=e209] [cursor=pointer]:
                - /url: "#tabside2"
            - listitem [ref=e210]:
              - link "Comments" [ref=e211] [cursor=pointer]:
                - /url: "#tabside3"
          - list [ref=e215]:
            - listitem [ref=e216]:
              - generic [ref=e217]:
                - link [ref=e219] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
                  - img "Arrays%20(Single-dimensional)%20in%20Java" [ref=e220]
                - link "Arrays in Java" [ref=e222] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - listitem [ref=e223]:
              - generic [ref=e224]:
                - link [ref=e226] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
                  - img "31" [ref=e227]
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e229] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - listitem [ref=e230]:
              - generic [ref=e231]:
                - link [ref=e233] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
                  - img "Apache+maven" [ref=e234]
                - link "Maven uninstallation on Microsoft Windows" [ref=e236] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
            - listitem [ref=e237]:
              - generic [ref=e238]:
                - link [ref=e240] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
                  - img "30" [ref=e241]
                - link "Write a java program to print the factors of a given number" [ref=e243] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - listitem [ref=e244]:
              - generic [ref=e245]:
                - link [ref=e247] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
                  - img "Cucumber+Eclipse+pluggin" [ref=e248]
                - link "How to install Cucumber Eclipse Plugin" [ref=e250] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
          - text:     
        - generic [ref=e251]:
          - generic [ref=e252]:
            - heading "Archive" [level=2] [ref=e254]
            - combobox [ref=e258]:
              - option "Archive" [selected]
              - option "April (4)"
              - option "March (10)"
              - option "February (10)"
              - option "January (13)"
              - option "December (5)"
              - option "October (5)"
              - option "September (2)"
              - option "June (21)"
              - option "May (10)"
              - option "April (1)"
              - option "March (25)"
              - option "February (3)"
              - option "January (1)"
              - option "July (6)"
              - option "June (10)"
              - option "May (5)"
              - option "April (7)"
              - option "March (2)"
              - option "December (1)"
              - option "November (3)"
              - option "October (8)"
              - option "September (4)"
              - option "August (2)"
              - option "July (2)"
              - option "May (7)"
              - option "April (4)"
              - option "March (2)"
              - option "January (1)"
              - option "November (1)"
              - option "October (4)"
              - option "September (5)"
              - option "July (13)"
              - option "June (13)"
              - option "April (8)"
              - option "March (10)"
              - option "February (16)"
              - option "January (1)"
              - option "September (1)"
              - option "August (5)"
          - generic [ref=e259]:
            - heading "Tags" [level=2] [ref=e261]
            - generic [ref=e262]:
              - link ".NET" [ref=e264] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
              - link "Apache POI" [ref=e266] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
              - link "AutomationTesting" [ref=e268] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
              - link "Eclipse" [ref=e270] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
              - link "Java" [ref=e272] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
              - link "Maven" [ref=e274] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
              - link "Selenium" [ref=e276] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
              - link "Shorts" [ref=e278] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
              - link "SQL" [ref=e280] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
              - link "TechNews" [ref=e282] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
              - link "Testing" [ref=e284] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
              - link "TestNG" [ref=e286] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
              - link "Tutorials" [ref=e288] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
              - link "Web Automation" [ref=e290] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
              - link "Windows Automation" [ref=e292] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
            - insertion [ref=e294]:
              - generic [ref=e297]:
                - heading "These are topics related to the article that might interest you" [level=2] [ref=e299]: Discover more
                - link "Core Java training" [ref=e300] [cursor=pointer]
                - link "Learn Java" [ref=e305] [cursor=pointer]
                - link "Selenium automation testing" [ref=e310] [cursor=pointer]
    - insertion [ref=e316]
    - generic [ref=e319]:
      - generic [ref=e322]:
        - heading "Recent Tutorials" [level=2] [ref=e324]
        - generic [ref=e326]:
          - generic [ref=e327]:
            - link [ref=e328] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - generic [ref=e330]:
              - heading [level=3] [ref=e331]:
                - link "Arrays in Java" [ref=e332] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
              - text: Yada Giri ReddyApr 16, 2023
          - generic [ref=e333]:
            - link [ref=e334] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - generic [ref=e336]:
              - heading [level=3] [ref=e337]:
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e338] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
              - text: Yada Giri ReddyApr 08, 2023
          - generic [ref=e339]:
            - link [ref=e340] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - generic [ref=e342]:
              - heading [level=3] [ref=e343]:
                - link "Write a java program to print the factors of a given number" [ref=e344] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
              - text: Yada Giri ReddyApr 05, 2023
          - generic [ref=e345]:
            - link [ref=e346] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
            - generic [ref=e348]:
              - heading [level=3] [ref=e349]:
                - link "Write a java program to print the factorial of a given number" [ref=e350] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
              - text: Yada Giri ReddyApr 02, 2023
          - generic [ref=e351]:
            - link [ref=e352] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
            - generic [ref=e354]:
              - heading [level=3] [ref=e355]:
                - link "Write a java program to print the sum of the even numbers ranging from 8 to 250 using for loop" [ref=e356] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
              - text: Yada Giri ReddyMar 30, 2023
      - generic [ref=e358]:
        - generic [ref=e359]:
          - heading "Total Pageviews" [level=2] [ref=e361]
          - generic [ref=e364]:
            - strong [ref=e366]: "1"
            - strong [ref=e369]: "5"
            - strong [ref=e372]: "5"
            - strong [ref=e375]: "0"
            - strong [ref=e378]: "0"
            - strong [ref=e381]: "0"
            - strong [ref=e384]: "7"
            - strong [ref=e387]: "5"
        - generic [ref=e389]:
          - heading "Tech News" [level=2] [ref=e391]
          - list [ref=e393]:
            - listitem [ref=e394]:
              - link "How I Get Free Traffic from ChatGPT in 2025 (AIO vs SEO)" [ref=e396] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/12/how-i-get-free-traffic-from-chatgpt-in.html
              - text: "- 12/4/2025"
            - listitem [ref=e397]:
              - 'link "What is Blockchain: Everything You Need to Know (2025)" [ref=e399] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2025/11/what-is-blockchain-everything-you-need.html
              - text: "- 11/24/2025"
            - listitem [ref=e400]:
              - link "Top 10 AI Tools That Will Transform Your Content Creation in 2025" [ref=e402] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/01/top-10-ai-tools-that-will-transform.html
              - text: "- 1/2/2025"
            - listitem [ref=e403]:
              - 'link "LimeWire AI Studio Review 2023: Details, Pricing & Features" [ref=e405] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2023/12/limewire-ai-studio-review-2023-details.html
              - text: "- 12/12/2023"
            - listitem [ref=e406]:
              - link "Top 10 AI Tools in 2023 That Will Make Your Life Easier" [ref=e408] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2023/01/top-10-ai-tools-in-2023-that-will-make.html
              - text: "- 1/26/2023"
      - generic [ref=e410]:
        - generic [ref=e411]:
          - heading "Connect With us" [level=2] [ref=e413]
          - list [ref=e415]:
            - listitem [ref=e416]:
              - link "" [ref=e417] [cursor=pointer]:
                - /url: https://facebook.com/HYRTutorials
            - listitem [ref=e419]:
              - link "" [ref=e420] [cursor=pointer]:
                - /url: https://github.com/YadaGiriReddy/HYR-Tutorials
            - listitem [ref=e422]:
              - link "" [ref=e423] [cursor=pointer]:
                - /url: https://www.instagram.com/hyrtutorials
            - listitem [ref=e425]:
              - link "" [ref=e426] [cursor=pointer]:
                - /url: https://linkedin.com/company/hyrtutorials
            - listitem [ref=e428]:
              - link "" [ref=e429] [cursor=pointer]:
                - /url: https://t.me/hyrtutorials
            - listitem [ref=e431]:
              - link "" [ref=e432] [cursor=pointer]:
                - /url: https://youtube.com/hyrtutorials
        - generic [ref=e434]:
          - heading "Categories" [level=2] [ref=e436]
          - generic [ref=e437]:
            - link "Tutorials" [ref=e439] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
            - link "Java" [ref=e441] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
            - link "Testing" [ref=e443] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
            - link "AutomationTesting" [ref=e445] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
            - link "Web Automation" [ref=e447] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
            - link "TechNews" [ref=e449] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
            - link "Selenium" [ref=e451] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
            - link "Shorts" [ref=e453] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
            - link "TestNG" [ref=e455] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
            - link "SQL" [ref=e457] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
            - link "Eclipse" [ref=e459] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
            - link "Maven" [ref=e461] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
            - link "Apache POI" [ref=e463] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
            - link ".NET" [ref=e465] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
            - link "Windows Automation" [ref=e467] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
    - insertion [ref=e469]
    - generic [ref=e472]:
      - generic [ref=e473]:
        - text: Copyrights @ H Y R Tutorials - Designed by
        - link "Yada Giri Reddy" [ref=e474] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/hyadagirireddy/
      - generic [ref=e475]:
        - text: Crafted with  by
        - link "TemplatesYard":
          - /url: http://www.templatesyard.com/
        - text: "| Distributed by"
        - link "Blogger Themes" [ref=e476] [cursor=pointer]:
          - /url: http://www.mybloggerthemes.com/
    - text: 
  - iframe [aria-hidden] [ref=e477]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("NestedFrames", async ({ page }) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
  6  |     
  7  |     const frame1 = page.frameLocator('//iframe[@name="pact1"]');
  8  |     
  9  |     const frame2 = frame1.frameLocator('//iframe[@name="pact2"]');
  10 |     const frame3 = frame2.frameLocator('//iframe[@name="pact3"]');
  11 |     
  12 |     await frame1.locator('//input[@name="inp_val"]').fill("testing");
  13 |     await frame2.locator('//input[@placeholder="e.g. Selenium"]').fill("Cucumber");
  14 |     await frame3.locator('//input[@placeholder="e.g. Playwright"]').fill("playwright");
  15 | 
  16 |     //await page.waitForTimeout(3000);
  17 | });
  18 | 
  19 | 
  20 | test("Nested Frames Hyrtutorilas", async ({ page }) => {
  21 | 
  22 |     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  23 |     const frametwo = page.frameLocator("#frm2");
  24 |     await frametwo.getByPlaceholder("Enter First Name").fill("Logeswaran");
  25 |     await frametwo.getByPlaceholder("Enter Last Name").fill("Logan");
  26 |     await frametwo.locator('//input[@id="femalerb"]').check();
  27 |     await frametwo.locator('//input[@id="englishchbx"]').check();
  28 |     await frametwo.getByPlaceholder("Enter Email").fill("logeswaranjayavelmalar@gmail.com");
  29 |     await frametwo.getByPlaceholder("Enter Password").fill("123456789");
  30 |     //await page.waitForTimeout(1000);
  31 | 
  32 |     const framethree = page.frameLocator("#frm3");
  33 |     const frame3firstframe = framethree.frameLocator("#frm2");
> 34 |     await frame3firstframe.getByPlaceholder("Enter First Name").fill("Loges");
     |                                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  35 |     await frame3firstframe.getByPlaceholder("Enter Last Name").fill("Lovely");
  36 |     await frame3firstframe.locator('//input[@id="femalerb"]').check();
  37 |     await frame3firstframe.locator('//input[@id="englishchbx"]').check();
  38 |     await frame3firstframe.getByPlaceholder("Enter Email").fill("lovelylogan401@gmail.com");
  39 |     await frame3firstframe.getByPlaceholder("Enter Password").fill("123456789");
  40 |     //await page.waitForTimeout(3000);
  41 | })
```