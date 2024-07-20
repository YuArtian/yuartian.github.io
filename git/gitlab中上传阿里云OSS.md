# gitlab CD
>
> 命令行工具ossutil
> <https://help.aliyun.com/zh/oss/developer-reference/ossutil-1/?spm=a2c4g.11186623.0.0.503d4c8cpZS6sN>
使用 阿里云 ossutil 上传文件
cp 命令用于上传
> <https://help.aliyun.com/zh/oss/developer-reference/upload-objects-6?spm=a2c4g.11186623.0.i3#section-r52-yyp-4b5>
>
## gitlab 设置

在 gitlab 项目中增加环境变量
OSS_ACCESS_KEY_ID，OSS_ACCESS_KEY_SECRET，OSS_ENDPOINT，OSS_BUCKET_NAME 分别对应阿里云的 accessKeyId，accessKeySecret，endpoint，bucketName

在 gitlab yml 配置中的 job 中 script 中增加以下代码

```yml
script:
  - ossutil cp -r -f --meta=Cache-Control:max-age=604800 dist/ oss://$OSS_BUCKET/$APP_ENV/$APP_NAME/ -e $OSS_ENDPOINT -i $OSS_AK -k $OSS_SK
```

## 阿里云设置

bucket 需要设置授权
