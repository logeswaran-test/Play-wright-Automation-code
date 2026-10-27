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
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.hyrtutorials.com/p/frames-practice.html", waiting until "load"

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
        - iframe [ref=e44]:
          - generic [ref=f6e2]:
            - link [ref=f6e4] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsunO2FmW6eNE23BQ8Ik7KhuLH5VdJrqXvZOeYW3MfkWOc6RbR9LHnvWz5DDxjlCUOvv3EzPSekNp5ASzwk0pJ3rC9SIHaXVIVnKj5--pCajBABv2-g2QHU60jvyyO-felpEfQuLHHljpJF-vo0VpLQZtgTPRt1aQs8bCTM0eL2r1wb8U_FcZulo2KepO9E6Wzi-la_HSI8DMQDZTyzwgMwOGcMP_audi4ahyqlwQVTaNZITC8GUtoHU6gKDkKdv5J3MaM7wt38haXTyn4eTo6D0RwJ6Ar--TShpiMGTuqge6v8DF8_d3-g0lvbtURCHRUNMlNTUHbfMfrfUG3PZQsBqHJrgMXAqoQsBdFfyJGxLT9gbkAtB7-neCydgU983DMI0neBPOvrnr4rKsgB-YpNqgw880wOss5Qxnz2cKSkSl1jF0MNelIDeRMKjrNSGVMS5DSvtCx2BZ8WkMG7XEJ6rdU_kzGzrH7ymRNzmgAhmYKbApXcCRiCg5ibZ_Dpv_5enNZnAeoLwb0NcgrBUToTM0Q2AW6hViAK0ERtkjJchB4vLYzFS9tUYmPVyl-E6MJs_s98-NK5liEJRGzQXslutwxU8Cc_Js_yboaISydnl3-285HnsLA74noHHGU3Y5bxRaMIGyak4VsWCIP9-aecfrXEh_dWyFaFNUrMBZmX1mPtwVA0vohNj7Bb2h__DF0beD0yL-_6B3CD8Rl07QD_0fGHSPxKsw3VFlB8smuPQ5_rz8Xp1VKZ7DHGzelDl5pIA0ePfe4fvqHI04LRwEV6bWT8pbm1JhEOsEK0EHA8_ZRZPd9PmjAziTx9KN4yM5avsVLZ6YT0H84tleWvqJ-O08nJT2FwwMmAlxRfHs_4G3NDU2ToSy4NCdr0iFF5iwUWzfubS3ZEoaAiENW5WVLZSYL21ZsScrnHIfu8ih_y9ZyDzqzvzY7dX8DaW5V81-Wlpk3PRSQ3GYVd6MNfTD16gVQDcwTFp-UOQOMsir1MKHGARo7WJ844MtX9VvSogNxRKF_A3spdZd9gG-KdhuYFpGq4QGQFpDsamIjel7GiHSstNX96C25oXR5FwL9izzSMKY4mtCzBSWDa1V4Xh3fYp8olnW_dX62wzbHUsj7oi_7lwLByhgxp2cMOvezqY7KMX2Q-P4JvslxAjSvSLeZO_cqHG3r7t2kk0yCZQPghVEaNH6KDk0YBo-gOtDu4J6JlM7sP1lhkM-y8keNv1iiA1z5eU2NjfZYf2iLvhb_JtVGCO436UW5kd9D3nKrb_WyRNAfLUMGv6bZrZlMLzs5L4H-s7Cm6CALi25cRaDvtqXfm2tPAuFyIdc7G0ej_OC15OWUKzJMxA-vmxdxoSB7NysNfo61KoKN7I-pzI4dv-yoX-V05zT8uqHLiXuR9Kc8oezVcWuw1VfnGzTL58qGItyq3bXpZ6R1765zkoBptHSDKfioidk7FS0P58vZwiBrroDVqXkFa_6cfWylfQgXpjJWwHOKqqUBEYn5uMvohcVuQnr-vjHrIOTcUasGtm1K_fkpHxQNsLM1EqO2xbu5gfi_p2b2MUhBI8B493bmiTqVxeen-pUvf7nFHF2Y-CjZYmkmiaQokE2EOB4HSA52V0eAUkIpRTVCi_2RAV3EVRN0z9IHs62KJxIQx9NihrhAaFFIiYD-sRxxx0-KepAXrZSwo36ASwE-xNzpRB68z4efD1Q7mnFkROnO6jD9SXHBMQ2O9mR9wkySH22Zl6lh2hzjCOSJ97J6pYz62IOx9vlZxn15IgD_Itrq_UHFf_zGG2LZRd34v-NTPV4zxlbAzqGU44YWkoIhPr8JE3hvgQ0Y3HeFS47skUUj-vXG1T-nHLATIR21-S4O-mcW7-hpeRo99pwkLTqhYcxEZ3F2-HGJu26jkmyE3iSVhW5V2k3kLflk2th6QQaiWdtNIg39q5sPKhryN8RurK3QiprO2KCARFrHzgomgnPS9xRtipWEayWXPEZoRJ_EArNsBsT2C2p0DSa6NceZZyFhvVZ7ku_4aGGcwFfuxE_jWRiJJQjN8-wAxkccKl-3kDxCwVuU3LxY5wDdlRaQ&sai=AMfl-YQ8Hfj0Xl259LvAOgOJ07I9Dt_tuoWG7IB5ElkcmcrpuDJC9QIp1yBMjOl_5bTa2qfMzQnfNksD60CYlOTL4ypLs_ELcOaESf7q2EZ1VwaBAcF2XdunnSlkQeXUtiJJZohu6WBPfpU5ENuUzF2lbQA1Z9N-je4Nx6-TiMDH8LuZaHs4EsJ7aYPAPtLJvxc2Wbg0sURNMw-NDTIp8fDmJy0kZYgt7MZ1c3tu5yHVMgfNn82r10d9EpK-TJvnGzdLSrGAzyc6kSkfNQ0BVH5Js7UPwI_UF4aQJFjrMbW1Z20JOrFx-Jk8l804Rao7AKXTsA4djaoNWA-WC7MY1rjOVICxNn6ucMSf4VDdhTxZjXmgyNgk5X3_8PlVxg-bKlQNhi0QjwSMquEfwhME7nxbx_utDSgH64sf3zTcVh2ibxwPUHBrbflgmucxEMsbP2Fd_T1R8Hun9ZjPelcDr-LIaUpIxqfsCNhAqZxRCNK4XYOvpCby-N0S6DdK42_0Tf9zCP8yFHzeQ--bVeQHsM_JYm_oW1TwgAUhBVMLeBzW7BSEvQluiXeSI46qN_CB4b1bc43dr1J8A0-vJE2X8xlFxbeedcSpM7q_ETklX3fNZ_QtjeqbhE2pKJP5XqgM3swfUWun_-MKQNBcOohsBlR0xaFQ9zehOrpUtfxHKSYCAHfnFmEg4QAwuKeoYZkkWIIhWLOZsdtDL1qAGqOHRAtVP-kyXUjp10XRY_T6E5g4bfe8tlD8X_WJAoTSHGPzOwC1horUO2XMSKz7l-kW1Xiogla0QV7jWeGctjV0wYvYEaCxboI1LyxewIROyZSZGiIvU78bwvOoH_yBtx84Lvc_fF2cXXxruHtj-_8qQqQHxjd4adMj3DUf6xMANAnWKd2yLZOwZEzmXzbHVVMh6RzPjUqJ_n-Ugel7cJQLmQG8R4oCnvj0sUu0vlLMhLiZimLInGIHhZUKDAKbLDhTqmNAtBF_gPbKOVdzdBhg7Cyx_F6DrelR-_wD&sig=Cg0ArKJSzBaQ2aYTf4X0&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://business.google.com/in/start/google-ads/ln/message-ads/%3Fsubid%3Din-en-adon-awa-dis-a-ahns!o3~AMsySZYH5XfiW1Npj6g8RUqG1exu~437188663~648052500~261730825~OPTID-8073248%26utm_source%3Dawa%26utm_medium%3Ddv360%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23404342702
              - img "Advertisement" [ref=f6e5]
            - generic [ref=f6e6]:
              - generic:
                - generic [ref=f6e7] [cursor=pointer]
                - button [ref=f6e12] [cursor=pointer]
    - generic [ref=e46]:
      - listitem [ref=e47]:
        - link " Home" [ref=e48] [cursor=pointer]:
          - /url: https://www.hyrtutorials.com/
          - generic [ref=e49]: 
          - text: Home
      - list [ref=e52]:
        - listitem [ref=e53]:
          - link "Tech News" [ref=e54] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/TechNews
        - listitem [ref=e55]:
          - link "Tutorials " [ref=e56] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/search/label/Tutorials
        - listitem [ref=e57]:
          - link "YouTube Courses " [ref=e58] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e59]:
          - link "Selenium Practice " [ref=e60] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e61]:
          - link "Contact" [ref=e62] [cursor=pointer]:
            - /url: https://www.hyrtutorials.com/p/contactus.html
    - generic [ref=e63]:
      - generic [ref=e70]:
        - heading "Frames Practice" [level=1] [ref=e73]
        - article [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: "This page is used for practicing iframes in web automation. We have three types of frames in web applications, those are:"
            - list [ref=e78]:
              - listitem [ref=e79]:
                - text: frame - The
                - generic [ref=e80]: <frame>
                - text: tag was used in HTML 4 to define one particular window (frame) within a
                - generic [ref=e81]: <frameset>
                - text: .
              - listitem [ref=e82]:
                - text: frameset - The
                - generic [ref=e83]: <frameset>
                - text: tag was used in HTML 4 to define a frameset.
              - listitem [ref=e84]:
                - text: iframe - The
                - generic [ref=e85]: <iframe>
                - text: tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.
            - generic [ref=e86]: Out of these, frame and frameset were no longer being supported in HTML 5. Below we have three frames to practice.
            - generic [ref=e87]:
              - generic [ref=e88]:
                - paragraph [ref=e89]
                - paragraph [ref=e90]:
                  - text: This textbox is used for entering the text after switching back from frames.
                  - link "Frames practice exercises" [ref=e91] [cursor=pointer]
                - textbox [ref=e95]
              - generic [ref=e96]:
                - heading "Frame1:" [level=3] [ref=e97]
                - iframe [ref=e98]: <p>Your browser does not support iframes.</p>
              - generic [ref=e99]:
                - heading "Frame2:" [level=3] [ref=e100]
                - iframe [ref=e101]: <p>Your browser does not support iframes.</p>
              - generic [ref=e102]:
                - heading "Frame3:" [level=3] [ref=e103]
                - iframe [ref=e104]: <p>Your browser does not support iframes.</p>
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]:
            - heading "Support My Work" [level=2] [ref=e111]
            - link "Buy me a coffee" [ref=e114] [cursor=pointer]:
              - /url: https://buymeacoffee.com/yadagirireddy
          - generic [ref=e130]:
            - heading "Subscribe to YouTube channels" [level=2] [ref=e132]
            - generic [ref=e133]:
              - iframe [ref=e135]:
                - generic [ref=f11e2]:
                  - link:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                    - generic [ref=f11e3] [cursor=pointer]
                  - link "H Y R Tutorials" [ref=f11e7] [cursor=pointer]:
                    - /url: /channel/UCzFPWBdClpZ9afmmyhho4Rg
                  - generic [ref=f11e8]:
                    - button "YouTube" [ref=f11e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f11e11]
                    - button "74K" [ref=f11e12]
              - iframe [ref=e137]:
                - generic [ref=f12e2]:
                  - link:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                    - generic [ref=f12e3] [cursor=pointer]
                  - link "H Y R Tutorials - Telugu" [ref=f12e7] [cursor=pointer]:
                    - /url: /channel/UC1Bbtdbpfert8leeKx2mssw
                  - generic [ref=f12e8]:
                    - button "YouTube" [ref=f12e9] [cursor=pointer]:
                      - generic "YouTube" [ref=f12e11]
                    - button "157K" [ref=f12e12]
          - generic [ref=e138]:
            - heading "Telegram" [level=2] [ref=e140]
            - link "Join Telegram Channel" [ref=e142] [cursor=pointer]:
              - /url: https://xn--r1a.click/hyrtutorials
          - heading "Facebook" [level=2] [ref=e148]
          - generic [ref=e149]:
            - heading "Twitter" [level=2] [ref=e151]
            - link "Follow @hyrtutorials" [ref=e153] [cursor=pointer]:
              - /url: https://twitter.com/hyrtutorials?ref_src=twsrc%5Etfw
        - generic [ref=e154]:
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link "Popular" [ref=e157] [cursor=pointer]:
                - /url: "#tabside1"
            - listitem [ref=e158]:
              - link "Recent" [ref=e159] [cursor=pointer]:
                - /url: "#tabside2"
            - listitem [ref=e160]:
              - link "Comments" [ref=e161] [cursor=pointer]:
                - /url: "#tabside3"
          - list [ref=e165]:
            - listitem [ref=e166]:
              - generic [ref=e167]:
                - link [ref=e169] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
                  - img "Arrays%20(Single-dimensional)%20in%20Java" [ref=e170]
                - link "Arrays in Java" [ref=e172] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - listitem [ref=e173]:
              - generic [ref=e174]:
                - link [ref=e176] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
                  - img "31" [ref=e177]
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e179] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - listitem [ref=e180]:
              - generic [ref=e181]:
                - link [ref=e183] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
                  - img "Apache+maven" [ref=e184]
                - link "Maven uninstallation on Microsoft Windows" [ref=e186] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/maven-uninstallation-on-microsoft.html
            - listitem [ref=e187]:
              - generic [ref=e188]:
                - link [ref=e190] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
                  - img "30" [ref=e191]
                - link "Write a java program to print the factors of a given number" [ref=e193] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - listitem [ref=e194]:
              - generic [ref=e195]:
                - link [ref=e197] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
                  - img "Cucumber+Eclipse+pluggin" [ref=e198]
                - link "How to install Cucumber Eclipse Plugin" [ref=e200] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2019/09/how-to-install-cucumber-eclipse-plugin.html
          - text:     
        - generic [ref=e201]:
          - generic [ref=e202]:
            - heading "Archive" [level=2] [ref=e204]
            - combobox [ref=e208]:
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
          - generic [ref=e209]:
            - heading "Tags" [level=2] [ref=e211]
            - generic [ref=e212]:
              - link ".NET" [ref=e214] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
              - link "Apache POI" [ref=e216] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
              - link "AutomationTesting" [ref=e218] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
              - link "Eclipse" [ref=e220] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
              - link "Java" [ref=e222] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
              - link "Maven" [ref=e224] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
              - link "Selenium" [ref=e226] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
              - link "Shorts" [ref=e228] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
              - link "SQL" [ref=e230] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
              - link "TechNews" [ref=e232] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
              - link "Testing" [ref=e234] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
              - link "TestNG" [ref=e236] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
              - link "Tutorials" [ref=e238] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
              - link "Web Automation" [ref=e240] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
              - link "Windows Automation" [ref=e242] [cursor=pointer]:
                - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
    - generic [ref=e244]:
      - generic [ref=e247]:
        - heading "Recent Tutorials" [level=2] [ref=e249]
        - generic [ref=e251]:
          - generic [ref=e252]:
            - link [ref=e253] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
            - generic [ref=e255]:
              - heading [level=3] [ref=e256]:
                - link "Arrays in Java" [ref=e257] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/arrays-in-java.html
              - text: Yada Giri ReddyApr 16, 2023
          - generic [ref=e258]:
            - link [ref=e259] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
            - generic [ref=e261]:
              - heading [level=3] [ref=e262]:
                - link "Write a java program to print the English Alphabet in Upper case and Lower case" [ref=e263] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/print-the-English-Alphabet-in-Upper-case-and-Lower-case.html
              - text: Yada Giri ReddyApr 08, 2023
          - generic [ref=e264]:
            - link [ref=e265] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
            - generic [ref=e267]:
              - heading [level=3] [ref=e268]:
                - link "Write a java program to print the factors of a given number" [ref=e269] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factors-of-a-given-number.html
              - text: Yada Giri ReddyApr 05, 2023
          - generic [ref=e270]:
            - link [ref=e271] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
            - generic [ref=e273]:
              - heading [level=3] [ref=e274]:
                - link "Write a java program to print the factorial of a given number" [ref=e275] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/04/factorial-of-a-given number.html
              - text: Yada Giri ReddyApr 02, 2023
          - generic [ref=e276]:
            - link [ref=e277] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
            - generic [ref=e279]:
              - heading [level=3] [ref=e280]:
                - link "Write a java program to print the sum of the even numbers ranging from 8 to 250 using for loop" [ref=e281] [cursor=pointer]:
                  - /url: https://www.hyrtutorials.com/2023/03/sumof-the-even-numbers-ranging-from-8-to-250-using-for-loop.html
              - text: Yada Giri ReddyMar 30, 2023
      - generic [ref=e283]:
        - generic [ref=e284]:
          - heading "Total Pageviews" [level=2] [ref=e286]
          - generic [ref=e289]:
            - strong [ref=e291]: "1"
            - strong [ref=e294]: "5"
            - strong [ref=e297]: "5"
            - strong [ref=e300]: "0"
            - strong [ref=e303]: "0"
            - strong [ref=e306]: "1"
            - strong [ref=e309]: "3"
            - strong [ref=e312]: "8"
        - generic [ref=e314]:
          - heading [level=2] [ref=e316]
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link "How I Get Free Traffic from ChatGPT in 2025 (AIO vs SEO)" [ref=e321] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/12/how-i-get-free-traffic-from-chatgpt-in.html
              - text: "- 12/4/2025"
            - listitem [ref=e322]:
              - 'link "What is Blockchain: Everything You Need to Know (2025)" [ref=e324] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2025/11/what-is-blockchain-everything-you-need.html
              - text: "- 11/24/2025"
            - listitem [ref=e325]:
              - link "Top 10 AI Tools That Will Transform Your Content Creation in 2025" [ref=e327] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2025/01/top-10-ai-tools-that-will-transform.html
              - text: "- 1/2/2025"
            - listitem [ref=e328]:
              - 'link "LimeWire AI Studio Review 2023: Details, Pricing & Features" [ref=e330] [cursor=pointer]':
                - /url: https://techncruncher.blogspot.com/2023/12/limewire-ai-studio-review-2023-details.html
              - text: "- 12/12/2023"
            - listitem [ref=e331]:
              - link "Top 10 AI Tools in 2023 That Will Make Your Life Easier" [ref=e333] [cursor=pointer]:
                - /url: https://techncruncher.blogspot.com/2023/01/top-10-ai-tools-in-2023-that-will-make.html
              - text: "- 1/26/2023"
      - generic [ref=e335]:
        - generic [ref=e336]:
          - heading "Connect With us" [level=2] [ref=e338]
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link "" [ref=e342] [cursor=pointer]:
                - /url: https://facebook.com/HYRTutorials
            - listitem [ref=e344]:
              - link "" [ref=e345] [cursor=pointer]:
                - /url: https://github.com/YadaGiriReddy/HYR-Tutorials
            - listitem [ref=e347]:
              - link "" [ref=e348] [cursor=pointer]:
                - /url: https://www.instagram.com/hyrtutorials
            - listitem [ref=e350]:
              - link "" [ref=e351] [cursor=pointer]:
                - /url: https://linkedin.com/company/hyrtutorials
            - listitem [ref=e353]:
              - link "" [ref=e354] [cursor=pointer]:
                - /url: https://t.me/hyrtutorials
            - listitem [ref=e356]:
              - link "" [ref=e357] [cursor=pointer]:
                - /url: https://youtube.com/hyrtutorials
        - generic [ref=e359]:
          - heading "Categories" [level=2] [ref=e361]
          - generic [ref=e362]:
            - link "Tutorials" [ref=e364] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Tutorials?&max-results=6
            - link "Java" [ref=e366] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Java?&max-results=6
            - link "Testing" [ref=e368] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Testing?&max-results=6
            - link "AutomationTesting" [ref=e370] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/AutomationTesting?&max-results=6
            - link "Web Automation" [ref=e372] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Web%20Automation?&max-results=6
            - link "TechNews" [ref=e374] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TechNews?&max-results=6
            - link "Selenium" [ref=e376] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Selenium?&max-results=6
            - link "Shorts" [ref=e378] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Shorts?&max-results=6
            - link "TestNG" [ref=e380] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/TestNG?&max-results=6
            - link "SQL" [ref=e382] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/SQL?&max-results=6
            - link "Eclipse" [ref=e384] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Eclipse?&max-results=6
            - link "Maven" [ref=e386] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Maven?&max-results=6
            - link "Apache POI" [ref=e388] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Apache%20POI?&max-results=6
            - link ".NET" [ref=e390] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/.NET?&max-results=6
            - link "Windows Automation" [ref=e392] [cursor=pointer]:
              - /url: https://www.hyrtutorials.com/search/label/Windows%20Automation?&max-results=6
    - generic [ref=e394]:
      - generic [ref=e395]:
        - text: Copyrights @ H Y R Tutorials - Designed by
        - link "Yada Giri Reddy" [ref=e396] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/hyadagirireddy/
      - generic [ref=e397]:
        - text: Crafted with  by
        - link "TemplatesYard" [ref=e398] [cursor=pointer]:
          - /url: http://www.templatesyard.com/
        - text: "| Distributed by"
        - link "Blogger Themes" [ref=e399] [cursor=pointer]:
          - /url: http://www.mybloggerthemes.com/
    - text: 
  - iframe [aria-hidden] [ref=e400]
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
> 22 |     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  34 |     await frame3firstframe.getByPlaceholder("Enter First Name").fill("Loges");
  35 |     await frame3firstframe.getByPlaceholder("Enter Last Name").fill("Lovely");
  36 |     await frame3firstframe.locator('//input[@id="femalerb"]').check();
  37 |     await frame3firstframe.locator('//input[@id="englishchbx"]').check();
  38 |     await frame3firstframe.getByPlaceholder("Enter Email").fill("lovelylogan401@gmail.com");
  39 |     await frame3firstframe.getByPlaceholder("Enter Password").fill("123456789");
  40 |     //await page.waitForTimeout(3000);
  41 | })
```