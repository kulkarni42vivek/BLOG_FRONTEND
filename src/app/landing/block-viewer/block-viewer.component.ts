import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-block-viewer',
    template: `
        <div class="block-section">
            <div class="block-header">
                <span class="block-title">
                    <span>{{ header }}</span>
                </span>
                <div class="block-actions">
                    <a
                        tabindex="0"
                        [ngClass]="{
                            'block-action-active':
                                blockView === BlockView.PREVIEW
                        }"
                        ><span>Login</span></a
                    >
                    <a
                        [attr.tabindex]="'0'"
                        [ngClass]="{
                            'block-action-active': blockView === BlockView.CODE
                        }"
                    >
                        <span>Register</span>
                    </a>
                    <a
                        [attr.tabindex]="'0'"
                        [ngClass]="{
                            'block-action-active': blockView === BlockView.CODE
                        }"
                    >
                        <span>About Us</span>
                    </a>
                </div>
            </div>
            <div class="block-content">
                <div
                    [class]="containerClass"
                    [ngStyle]="previewStyle"
                    *ngIf="blockView === BlockView.PREVIEW"
                >
                    <ng-content></ng-content>
                </div>
                <div *ngIf="blockView === BlockView.CODE">
                    <pre class="app-code"><code>{{code}}</code></pre>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./block-viewer.component.scss'],
})
export class BlockViewerComponent {
    @Input() header!: string;

    @Input() code!: string;

    @Input() containerClass!: string;

    @Input() previewStyle!: object;

    @Input() free: boolean = true;

    @Input() new: boolean = false;

    BlockView = BlockView;

    blockView: BlockView = BlockView.PREVIEW;

    activateView(event: Event, blockView: BlockView) {
        this.blockView = blockView;
        event.preventDefault();
    }

    async copyCode(event: Event) {
        await navigator.clipboard.writeText(this.code);
        event.preventDefault();
    }
}
enum BlockView {
    PREVIEW,
    CODE,
}
