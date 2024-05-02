import os

# 获取当前文件的绝对路径
current_file_directory = os.path.dirname(os.path.abspath(__file__))

# 构建 .yml 文件的绝对路径
absolute_path_to_file = os.path.join(current_file_directory, 'config.yml')

print(absolute_path_to_file)  # 打印出绝对路径，以便检查
