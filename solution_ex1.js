const findDeviceById = (devices, targetId) => {
  return devices.find((device) => device.id === targetId) || null;
};

const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

const devices = [
  { id: "DEV_001", name: "Điều hòa phòng khách", isActive: true, powerWatts: 1200 },
  { id: "DEV_002", name: "Đèn ngủ", isActive: true, powerWatts: 8 },
];

console.log("Tắt điều hòa:", updateDevice(devices, "DEV_001", { isActive: false }));
console.log("Đặt công suất đèn ngủ về 0W:", updateDevice(devices, "DEV_002", { powerWatts: 0 }));
console.log("Trạng thái sau cập nhật:", devices);

if (typeof module !== "undefined") {
  module.exports = { findDeviceById, updateDevice };
}
