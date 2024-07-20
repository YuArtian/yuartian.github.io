# Linux文件系统-Inode-block

inode 是保存在磁盘分区中的文件的唯一编号
block负责存储实际的数据，而 inode 负责存储描述文件的元数据和数据块的指针
文件系统通过 inode 和 block 的协作来管理和访问文件的数据

## Block

- **Block**（块）是文件系统中存储数据的基本单位。硬盘上的数据是按块存储的，块的大小通常是4KB，但也可以是其他大小（如1KB、2KB、8KB等）。
- 一个文件的数据可以分散存储在多个块中。每个块有一个唯一的标识符（块号）。
- 块的大小会影响文件系统的性能和空间利用率。较大的块可以提高大文件的读写性能，但可能会导致空间浪费，因为即使文件很小也会占用一个完整的块。

## Inode

- **Inode**（索引节点）是文件系统中的数据结构，用于存储文件的元数据（metadata），如文件大小、所有者、权限、创建时间、修改时间等。
- 每个文件在文件系统中都有一个唯一的inode。inode不存储文件名，但存储了文件所在的块的指针。
- 当用户访问一个文件时，文件系统首先通过文件名查找到对应的inode，再通过inode找到文件数据所在的块。

## Block和Inode的关联

- 一个文件的inode包含指向文件数据块的指针。这些指针指向的是具体存储数据的块的位置。
- 如果文件比较大，一个inode可能包含多个直接指针、间接指针、双重间接指针甚至三重间接指针，以管理大量的数据块。
- inode和block的数量是有限的。文件系统在创建时会指定inode和block的数量，过多的小文件可能会用光inodes，而大文件可能会用光blocks。

为了更清晰地理解inode和block，我们可以通过一个具体的例子来说明它们在文件系统中的作用和结构。

## 示例

假设我们有一个文件，文件名为`example.txt`，文件大小为10KB。在一个块大小为4KB的文件系统中，这个文件会使用3个块来存储数据。

### Inode示例

假设`example.txt`的inode编号为1234。inode的数据结构可能如下：

```text
inode 1234:
  - 文件大小: 10KB
  - 文件所有者: user
  - 文件权限: rw-r--r--
  - 创建时间: 2024-07-07 10:00:00
  - 修改时间: 2024-07-07 10:30:00
  - 数据块指针:
    - 直接指针: [101, 102, 103]
```

在这个例子中，inode包含了文件的元数据，并且包含了3个直接指针，每个指针指向一个数据块。块编号为101、102和103。

### Block示例

接下来，我们来看一下这些数据块：

```text
Block 101:
  - 数据: "This is the content of example.txt. The content is split across multiple blocks."
  - (4KB数据)

Block 102:
  - 数据: "Continuation of the file content. This is the second block of example.txt."
  - (4KB数据)

Block 103:
  - 数据: "End of the file content. This block contains the last part of the file."
  - (2KB数据)
```

在这个例子中，每个数据块都存储了一部分`example.txt`文件的内容。因为文件大小为10KB，需要3个4KB的块来存储。
