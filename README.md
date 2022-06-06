# Troubelshooting

## libudev missing

```bash
wget https://github.com/libusb/libusb/releases/download/v1.0.21/libusb-1.0.21.tar.bz2
tar -xf libusb-1.0.21.tar.bz2
cd libusb-1.0.21
termux-fix-shebang configure
./configure --prefix=$PREFIX --disable-udev
make
make install  
```
