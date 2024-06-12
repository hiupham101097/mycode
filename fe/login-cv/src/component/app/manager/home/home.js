import './home.css';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../home/assets/image1.jpg';



function getCookie(cookie) {
    let value = cookie.split(';');
    console.log('cookie : ', value);
    return value[0] == "" || value[0] == "NaN" || value[0] == undefined || value == "undefined" ? null : value[0];

}

const HomePage = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const token = getCookie(document.cookie);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );
    var url = ''
    if (window.location.pathname.startsWith("/login") == false && token != null) {
        return (
            <div className='homepage'>
                <div class='container'>
                    <div class='header-page'>
                        <div className='group1'>
                            <div class='title'>Phạm Minh Hiếu</div>
                            <div class='body'>
                                <div class='c1'>
                                    <span>Điện Thoại</span>
                                    <span>Email</span>
                                    <span>Địa chỉ</span>
                                </div>

                                <div class='c2'>
                                    <span>0394264400</span>
                                    <span>hieupham101097@gmail.com</span>
                                    <span>Thành phố Nha trang, Khánh Hòa</span>
                                </div>
                            </div>

                        </div>
                        <div className='group2'>
                            <img src={image1} height={120} width={120} />
                        </div>
                    </div>

                    <div class='content'>
                        <div class='gr1'>
                            <div class='title'>
                                <span>Mục tiêu nghề nghiệp</span>
                            </div>
                            <div class='value'>
                                <span class='t1'>
                                    Học hỏi và trao dồi thêm nhiều kiến thức và công nghệ mới
                                </span>
                                <span class='t1'>
                                    Nâng cao trình độ và khả năng tư duy với nhiều mô hình mới
                                </span>
                                <span class='t1'>
                                    Môi trường làm việc năng động
                                </span>
                            </div>
                        </div>


                        <div class='gr1'  >
                            <div class='title'>
                                <span>Học vấn</span>
                            </div>
                            <div class='border-text'>
                                <div class='value2'>
                                    <div class='v1' width={300}>
                                        2016-2020
                                    </div>
                                    <div class='v2'>
                                        <div class='name'>Trường Đại Học Nha Trang</div>
                                        <div>Công Nghệ Thông tin</div>
                                    </div>
                                    <div class=''></div>
                                </div>
                            </div>
                        </div>

                        <div class='gr1'  >
                            <div class='title'>
                                <span>Kinh Nghiệm làm việc</span>
                            </div>
                            <div class='border-text'>
                                <div class='value2'>
                                    <div class='v1'>
                                        2020 - Đến nay
                                    </div>
                                    <div class='v2'>
                                        <div class='name'>Công ty cổ phần Trenet</div>
                                        <div>FullStack Developer</div>
                                        <div>Lập trình viên BackEnd, FortEnd, Mobile App</div>
                                    </div>
                                    <div class=''></div>
                                </div>
                            </div>
                        </div>

                        <div class='gr1'  >
                            <div class='title'>
                                <span>Hoạt Động</span>
                            </div>
                            <div class='border-text'>
                                <div class='value2'>
                                    <div class='v1'>
                                        2019 - Đến nay
                                    </div>
                                    <div class='v2'>
                                        <div class='name'>Công ty cổ phần Trenet</div>
                                        <div>FULLSTACK DEVELOPER</div>
                                        <div>Thiết kế API cho webApp dùng C# .net core với mô hình ABP Framework,
                                            Xây dựng web với Angular, và xây dựng app mobile với Flutter,
                                            hướng dẫn thực tập và đào tạo người mới
                                        </div>
                                    </div>
                                    <div class=''></div>
                                </div>
                            </div>
                        </div>

                        <div class='gr1'  >
                            <div class='title'>
                                <span>Các kỹ năng</span>
                            </div>
                            <div class='border-text'>
                                <div class='value2'>
                                    <div class='vr1'>
                                        Kỹ năng làm việc nhóm
                                    </div>
                                    <div class='v2'>
                                        Trao đổi phân tích dự án với teamwork
                                    </div>
                                    <div class=''></div>
                                </div>


                                <div class='value2'>
                                    <div class='vr1'>
                                        Suport intern $ Fresher
                                    </div>
                                    <div class='v2'>
                                        <div>Hướng dẫn hổ trợ cho Intern</div>
                                        <div>Đào tạo kỹ năng và hòa nhập cho Fresher</div>
                                    </div>
                                    <div class=''></div>
                                </div>

                                <div class='value2'>
                                    <div class='vr1'>
                                        BackEnd
                                    </div>
                                    <div class='v2'>
                                        <div>Có kinh nghiệm 6 tháng xây dựng các API</div>
                                        <div>Có kinh nghiệm với windows server; build code</div>
                                        <div>Biết SQL Server ở mức cơ bản</div>
                                    </div>
                                    <div class=''></div>
                                </div>

                                <div class='value2'>
                                    <div class='vr1'>
                                        FrontEnd
                                    </div>
                                    <div class='v2'>
                                        <div>Có kinh nghiệm 1 năm xây dựng, phát triển, và bảo trì web</div>
                                        <div>Xây dựng các WebApp theo yêu cầu</div>
                                        <div>Có kỹ năng Debug; json</div>
                                        <div>Xây dựng WebApp tương tác với mobile</div>
                                    </div>
                                    <div class=''></div>
                                </div>

                                <div class='value2'>
                                    <div class='vr1'>
                                        Mobile App
                                    </div>
                                    <div class='v2'>
                                        <div>Có kinh nghiệm 1.5 năm xây dựng, phát triển và bảo trì App</div>
                                        <div>Xây dựng app theo yêu cầu</div>
                                        <div>Đọc lập xây dựng source</div>
                                        <div>Có kinh nghiêm quản lý State với Bloc và Provider</div>
                                        <div>Có kinh nghiệm làm việc với Android và IOS</div>
                                        <div>Có kinh nghiêm làm việc với FireBase, Gits</div>
                                        <div></div>
                                    </div>
                                    <div class=''></div>
                                </div>
                            </div>
                        </div>

                        <div class='gr1'>
                            <div class='title'>
                                <span>Sở Thích</span>
                            </div>
                            <div class='value'>
                                <span class='t1'>
                                    Nghe nhạc, team building, tìm hiểu lịch sử
                                </span>
                            </div>
                        </div>

                        <div class='gr1'>
                            <div class='title'>
                                <span>Dự án</span>
                            </div>
                            <div class='value3'>
                                <div class='type'>
                                    Quản Lý Công Việc
                                </div>
                                <div>(2021 - Đến nay)</div>

                                <div class='table'>
                                    <div class='gl'>
                                        <span class='gl1'>Khách hàng</span>
                                        <span class='gl2'>Công ty Cổ Phần Ilearn</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Mô tả dự án</span>
                                        <span class='gl2'>Website qlcv, giao việc, theo dõi quá trình, báo cáo tiến độ, xuất báo cáo </span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Số lượng thành viên</span>
                                        <span class='gl2'>4</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vị trí công việc</span>
                                        <span class='gl2'>backend-fronten-mobile</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vai trò trong dự án</span>
                                        <span class='gl2'>Viết Api với C# .net core, với dùng Angular để
                                            xây dựng giao diện, xây dựng webview cho app Mobile, bảo trì và nâng cấp trang web</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Công nghệ sử dụng</span>
                                        <span class='gl2'>C# .net core, Angular</span>
                                    </div>
                                </div>
                            </div>

                            <div class='value3'>
                                <div class='type'>
                                    EDU
                                </div>
                                <div>(2022 - Đến nay)</div>

                                <div class='table'>
                                    <div class='gl'>
                                        <span class='gl1'>Khách hàng</span>
                                        <span class='gl2'>Công ty Cổ Phần Ilearn</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Mô tả dự án</span>
                                        <span class='gl2'>Website quản lý giáo dục, quản lý và người dùng </span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Số lượng thành viên</span>
                                        <span class='gl2'>4</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vị trí công việc</span>
                                        <span class='gl2'>FrontEnd</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vai trò trong dự án</span>
                                        <span class='gl2'>
                                            xây dựng và bảo trì web quản lý giảng dạy, bảo trì nâng cấp,
                                            xây dựng webview cho app Mobile</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Công nghệ sử dụng</span>
                                        <span class='gl2'> Angular, Flutter, C# .net core</span>
                                    </div>
                                </div>
                            </div>

                            <div class='value3'>
                                <div class='type'>
                                    App Quản Lý Công Việc
                                </div>
                                <div>(2023 - Đến nay)</div>

                                <div class='table'>
                                    <div class='gl'>
                                        <span class='gl1'>Khách hàng</span>
                                        <span class='gl2'>Công ty Cổ Phần Ilearn</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Mô tả dự án</span>
                                        <span class='gl2'>App Quan Ly Cong Viec dùng cho nội bộ công ty, tạo công việc,
                                            báo cáo tiến độ hoàn thành, trao đổi theo công việc, theo nhóm và cá nhân </span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Số lượng thành viên</span>
                                        <span class='gl2'>1</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vị trí công việc</span>
                                        <span class='gl2'>Mobile Developer</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vai trò trong dự án</span>
                                        <span class='gl2'>
                                            xây dựng, thiết kế, kết hợp với webview, tích hợp cho Android và IOS</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Công nghệ sử dụng</span>
                                        <span class='gl2'> Flutter, Webview Angular</span>
                                    </div>
                                </div>
                            </div>

                            <div class='value3'>
                                <div class='type'>
                                    App EDU
                                </div>
                                <div>(2023 - Đến nay)</div>

                                <div class='table'>
                                    <div class='gl'>
                                        <span class='gl1'>Khách hàng</span>
                                        <span class='gl2'>Công ty Cổ Phần Ilearn</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Mô tả dự án</span>
                                        <span class='gl2'>App edu cho phần mềm quản lý lớp, với 2 giao diện UI/UX, Quản lý kết quả học tập,
                                            giao bài tập, chấm điểm, chat </span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Số lượng thành viên</span>
                                        <span class='gl2'>1</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vị trí công việc</span>
                                        <span class='gl2'>Mobile Developer</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vai trò trong dự án</span>
                                        <span class='gl2'>
                                            xây dựng và bảo trì web quản lý giảng dạy, bảo trì nâng cấp, và xây dựng webview cho mobile</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Công nghệ sử dụng</span>
                                        <span class='gl2'> Flutter, Webview Angular</span>
                                    </div>
                                </div>
                            </div>

                            <div class='value3'>
                                <div class='type'>
                                   Gia sư HLV thể thao RCA
                                </div>
                                <div>(2023 - 2024)</div>

                                <div class='table'>
                                    <div class='gl'>
                                        <span class='gl1'>Khách hàng</span>
                                        <span class='gl2'>Nước ngoài</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Mô tả dự án</span>
                                        <span class='gl2'>
                                            Xây dựng app cho huấn luyện viên các bộ môn thể thao, cả web và app </span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Số lượng thành viên</span>
                                        <span class='gl2'>3</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vị trí công việc</span>
                                        <span class='gl2'>FrontEnd - Mobile App</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Vai trò trong dự án</span>
                                        <span class='gl2'>
                                            xây dựng giao diện webApp, webview mobile, app mobile</span>
                                    </div>
                                    <div class='gl'>
                                        <span class='gl1'>Công nghệ sử dụng</span>
                                        <span class='gl2'> Flutter, Angular, C# .net core</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

}


export default HomePage;