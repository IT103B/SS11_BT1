# Bài 1: Sửa lỗi Falsy khi cập nhật thiết bị

## Phân tích lỗi

Hai điều kiện `if (updatedData.isActive)` và `if (updatedData.powerWatts)` kiểm tra giá trị theo truthy/falsy thay vì kiểm tra tham số có được truyền hay không. Trong JavaScript, `false` và số `0` là các giá trị falsy, vì vậy lệnh tắt thiết bị và đặt công suất về 0W đều bị bỏ qua.

`if (prop)` chỉ chạy khi giá trị của `prop` là truthy. Ngược lại, `prop !== undefined` vẫn chạy khi giá trị là `false`, `0` hoặc chuỗi rỗng; nó chỉ bỏ qua trường hợp giá trị chưa được cung cấp (`undefined`). Bản sửa dùng cách kiểm tra này cho từng trường có thể cập nhật.

## Test cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| Tắt điều hòa phòng khách | `{ isActive: false }` | Điều hòa vẫn ở trạng thái bật (`isActive: true`) | Điều hòa được tắt (`isActive: false`) |
| Đặt công suất đèn ngủ về 0W | `{ powerWatts: 0 }` | Đèn vẫn giữ công suất cũ (ví dụ `8W`) | Công suất được cập nhật thành `0W` |

## Chạy thử

```sh
node app.js
```

`app.js` là tệp mã nguồn được sửa theo yêu cầu; `solution_ex1.js` là bản nộp theo tên quy định. Cả hai in kết quả cập nhật ra Console và xuất `findDeviceById` cùng `updateDevice` để có thể tái sử dụng.
