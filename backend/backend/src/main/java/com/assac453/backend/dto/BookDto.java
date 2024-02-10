package com.assac453.backend.dto;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private Integer id;
    private String author;
    private String title;
    private String yearOfPublishing;
    private Integer pageCount;
    private Integer remainCount;
}
