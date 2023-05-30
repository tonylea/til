# Audible DRM removal

1. Download the DRM-ed Audible file from [your library](https://www.audible.com/library/titles).

2. Then you can use [this site](https://audible-converter.ml/) to determine the "Activation Bytes" for the file.

   The same value is used for all audiobooks in your account, so you only need to do it once.

3. Convert the file:

   ```bash
    ffmpeg -activation_bytes <ActivationBytes> -i <Input>.aax -c copy <Output>.m4b
   ```

Note: "m4b" is a format for audiobooks that supports things like bookmarks (for resuming where you left off, etc.). If your audiobook player doesn't understand that format, you can just rename it to m4a (doesn't require transcoding) or convert it to mp3, etc.
