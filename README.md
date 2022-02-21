<div align=center><img src="https://images.gitee.com/uploads/images/2021/0317/105428_2d83f8f9_8543696.png" width="590" height="212"/></div>

### Project Description (If useful to you, please light up the Star in the upper right corner!)

##### <a target="_blank" href="http://doc.sdwanyue.com/wanyue_open_uniapp/2100689">Project documentation</a> | <a target="_blank" href="http://doc.sdwanyue.com/wanyue_open_uniapp/2100691">Deployment document</a> | <a target="_blank" href="http://doc.sdwanyue.com/wanyue_open_web/2107615">Q&A</a> | <a target="_blank" href="http://doc.sdwanyue.com/wanyue_open_uniapp/2199269">The upgrade log</a>

---

### Demo  
![演示图](https://images.gitee.com/uploads/images/2021/0401/155114_9bce1969_8162876.png "app系统演示.png")
### The Web version of address
- Home page address: <a target="_blank" href="https://demo.sdwanyue.com">https://demo.sdwanyue.com</a>
- 学生端地址: <a target="_blank" href="https://demo.sdwanyue.com">https://demo.sdwanyue.com</a> 账号:13800000000 密码:123456
- 教师端地址: <a target="_blank" href="https://demo.sdwanyue.com/teacher">https://demo.sdwanyue.com/teacher</a> 账号:13866666666 密码:123456
- 后台地址: <a target="_blank" href="https://demo.sdwanyue.com/admin">https://demo.sdwanyue.com/admin</a> 账号: demo 密码: 123456
- 仓库地址: <a target="_blank" href="https://gitee.com/WanYueKeJi/wanyue_education_web">点击此处</a> 
    
### Project introduction
Wanyue online education after a long-term investigation of the education market, comprehensive of the current major online education institutions for the functional needs of the education platform, focusing on user experience, independent research and development of a set of knowledge payment, live teaching, online school construction and other functions as one of the Wanyue online education system, Meet the scene requirements of users for various online teaching activities such as open class, large class, small class and vocational training.
* All frameworks or components used are based on open source projects and the code is guaranteed to be 100% open source.
* The system functions are universal, both individuals and enterprises can use the system to quickly build an online education platform of their own.

系统前端采用uni-app+socket.io+WebRtc核心技术, 接口采用PhalApi框架配合TP5.1框架ThinkCMF,系统功能如下:

### Technical highlights
```
UNI-APP端:
1. A set of code that can be published to iOS, Android, Web (responsive), and various applets
2. Relying on the strong ecosystem of Dcloud company, developers can use it directly or modify it by themselves
Very convenient, online information/documents complete, no need to worry about the bug can not be solved.
3. Support instant messaging functions such as live video and chat. There are many open source projects, but few with chat rooms and live broadcast.
4. This project has built-in socket. IO components and WebRtc plug-ins, which can be directly used by developers for debugging and learning.
You no longer need to start with a basic Websocket.
5. The project occupies a small space, less than 2MB in total, occupying very little disk space for developers.
6. Multi-end adaptation has been made in the code, including style compatibility of small program side, H5 side, Android side and IOS side.
7. Vue/NVUE mixed development, to ensure the style beautiful at the same time, to avoid nvUE style compatibility problems.
8. Easy to configure, no installation, after downloading the Hbuilder editor can be run to view.   
    
后端:  
1. Background application ThinkCMF to quickly generate modern forms.
2.PHPExcel data export, export table more beautiful and visual.
3. Support wechat/Alipay payment, payment access is faster and simpler.
4. Background multi-task window.
5. Built-in powerful and flexible rights management.
6. Built-in combined data, system configuration, and management of fragmented data.
7. Perfect interactive effects and animations on the client side.
8. High-frequency data cache.
9. Built-in PhalApi interface framework for easy separation of front and back ends.
10.WebSocket long connection reduces CPU and memory usage, network congestion, and request response time.
11. Support queue to reduce traffic peak, remove coupling, high availability.
12. Clone can be used directly without installation, completely 100% true open source.

Note: regarding the PC side source code, please see another open source project of our company, Wanyue online education system Web version, the two projects are interchangeable 
```
### Function display
 ![展示图](https://images.gitee.com/uploads/images/2021/0410/144209_cf74cc99_8162876.png "function_all2.png")
 
 ### Main Functions
 #### Lecturer at the PC
* On the login page, you can use your mobile phone number, verification code or password to log in. You can use QQ or wechat accounts to log in
* Home page function, showing teacher's picture, name, the number of my live courses, the number of my courses, common functions and frequently asked questions
* Live classes

1. Phonetics class
In the voice class, the lecturer can enter the class and explain to the students according to the video and voice

2. Video classes
Video class lecturers can enable the camera, upload PPT picture courseware and share the screen
* Account, display profile picture, nickname and other account information, can be edited profile picture, nickname
 
 
 #### Student UNI - APP side
* home page,

1. Search You can search by course or teacher name

2. Display the rote chart added in the background

3. List of live classes, which can be divided into three types (voice + video, voice + audio, voice + PPT + camera live)

4. Display list of selected content, including cover, title, content type (video, audio, graphic)

* Selected content,

1. Details page: show cover picture, course title, number of students, lecturer and tutor, course type (password, free and paid) from top to bottom;

2. View details: The upper part is the video and audio playback area, and the progress bar can be sliding to view the video. The video can be viewed in full screen and can be played at double speed, and there is a horse light anti-theft watermark.

* Live classes,

1. Phonetics class

2. Video classes

* My courses:

1. My courses are consistent with the course selection center in the WEB, so I can search the corresponding courses according to the learning section, age, subject and category.

* the message:

1. System message: Students receive the message reminder sent by the system;

2. Course dynamics: Students will receive course information when the subscribed courses are updated;

3. Lecturer dynamics: when the lecturer concerned by students releases a new course or has a new dynamic, they will receive the lecturer dynamic information.

* Sharing and credits:

1. Poster sharing: Display the list of all fission poster activities on the current platform. You can view the name, course information, TWO-DIMENSIONAL code, etc., and get points after successful sharing.

2. Points: display the balance and details of users' points. The points come from the points returned by purchasing courses and the points awarded by lower-level users for purchasing courses.

* Personal Center:

1. Display students' profile pictures, nicknames and IDS at the top, and pay attention to the lecturer's display.

2. Purchased: shows the live courses and content courses that students have studied or purchased.

3. My integral;

4. Feedback;

About us;

6. Settings: Contact us, version update and clear cache.

### Main functions of the background
* set

1. Website information Website related information and SEO Settings

2. Private Settings Configure important parameters of the system (package login configuration, live broadcast configuration, cloud storage Settings)

3. Slide management Manage and configure the rotation banner chart of the home page

4. Upload Settings Upload information configurations

5. Configure file storage information

* User management

1. Edit background administrator identities and permissions

2. User List List of all registered users on the platform, which can be edited, qualified, disabled, and deleted

3. In the background of teacher List, the user whose common user is set as lecturer is displayed here

* Plug-in Center

1. Plug-in list View and edit application plug-in information

* Content Management

1. Article management Configuration of related articles on the website

2. Classification management Article classification management

3. Page management Contact us, about us and other single page content configuration

* Order management

1. Display the member name, purchase price, order number, receiving information, payment method and status of offline teaching materials displayed after the user purchases the course

* Knowledge management

1. Learning level Classification The learning level classification of the login page can be added in the background

2. Paid content list displays all the added articles that need to be paid/free, and you can view all the content information of the platform.

* List of large classes

1. Phonetics class

2. Video classes
  
  
  ### The page display
  ![页面展示](https://images.gitee.com/uploads/images/2021/0410/144409_e7f6736b_8162876.png "uniapp详情2.png")
  #### Live course Page
  ![展示图](https://images.gitee.com/uploads/images/2021/0317/105712_68d3b78b_8543696.png "live_show.png")
    
  #### Functional comparison
   ![输入图片说明](https://images.gitee.com/uploads/images/2021/0410/143936_7235ec5f_8162876.png "功能对比4(1).png") 
  
   ### Open Source Edition Usage notes 
  *  Allowed for personal study and teaching cases
  * The open source version is not suitable for commercial use. Please purchase the commercial version for commercial use
  * It is forbidden to sell the code and resources of the project in any form, and the infringer shall be solely responsible for any consequences arising therefrom
  
  ### Business cooperation
  * If you want to use a more complete education system, please contact QQ customer service: 2770722087 to obtain the professional version
  * If you want to customize development based on the education system, we provide paid customization service support!
  * There is no limit to other cooperation modes, welcome to visit!
  * Official website: [http://git.sdwanyue.com](http://git.sdwanyue.com)
                  
    
  ### Contact us (add customer service manager wechat or QQ, free access to THE SQL script)
  
  <div style='height: 130px'>
          <p>QQ：2770722087</p>
          <p>QQ群：995910672</p>
      </div>
  </div>
  <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=JShAyXeoKqg2lWFEUSElxELImhjeMG4y&jump_from=webapi"><img border="0" src="https://images.gitee.com/uploads/images/2021/0317/100424_072ee536_8543696.png" alt="万岳在线教育讨论群" title="万岳在线教育讨论群"></a> 可加
  
  > QQ群：995910672
 <img class="kefu_weixin" style="float:left;" src="https://images.gitee.com/uploads/images/2021/0524/181101_c6bda503_2242923.jpeg" width="102" height="102"/>



![展示图](https://images.gitee.com/uploads/images/2021/0317/105811_baa6ef78_8543696.png "公众号.png")
