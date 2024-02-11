package com.assac453.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookCreateDto {
    private String author;
    private String title;
    private String yearOfPublishing;
    private Integer pageCount;
    private Integer remainCount;
}
