package com.assac453.backend.service;

import com.assac453.backend.dto.BookCreateDto;
import com.assac453.backend.dto.BookDto;
import com.assac453.backend.entity.Book;

import java.util.List;

public interface BookService {
    BookDto getById(int id);
    List<BookDto> getAll();
    BookDto create(BookCreateDto book);
    BookDto update(int id, BookCreateDto book);
    BookDto delete(int id);
}
