package com.assac453.backend.controller;

import com.assac453.backend.dto.BookDto;
import com.assac453.backend.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/book")
public class BookController {
    private final BookService service;

    @PostMapping("/new")
    public BookDto create(@RequestBody BookDto dto){
        return service.create(dto);
    }

    @GetMapping("/{id}")
    public BookDto delete(@PathVariable Integer id){
        return service.delete(id);
    }
}
