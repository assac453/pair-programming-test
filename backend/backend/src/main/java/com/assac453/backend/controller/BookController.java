package com.assac453.backend.controller;

import com.assac453.backend.dto.BookDto;
import com.assac453.backend.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {
    private final BookService service;

    @GetMapping
    public List<BookDto> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public BookDto getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    @PostMapping
    public BookDto create(@RequestBody BookDto dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}")
    public BookDto update(@PathVariable Integer id, @RequestBody BookDto dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public BookDto delete(@PathVariable Integer id) {
        return service.delete(id);
    }
}
